import { Chain, ChainID, TxObject } from '../utils/types'
import { BlowfishApi, setApiKey } from '../utils/api'
import { getNetworkByChainID, getOrigin } from '../utils/helpers'
import { API_URL } from '../utils/constants'

type ScanTransactionParams = {
  chain: Chain | string
  chainId: ChainID | number
  transactions: string[] | TxObject
  userAccount: string
  language?: string
  dappUrl: string
  blowfishApiKey: string
}
export default async function (args: ScanTransactionParams) {
  const { blowfishApiKey, chain, chainId, transactions, userAccount, language, dappUrl } = args

  const origin = getOrigin(dappUrl)

  const metadata = {
    origin,
  }

  // TODO: 1. get network name from chainId
  const network = getNetworkByChainID(chainId)

  try {
    await setApiKey(blowfishApiKey)

    const response = await BlowfishApi.post(
      `${API_URL}/${chain}/v0/${network}/scan/transactions`,
      {
        transactions,
        userAccount,
        metadata,
      },
      {
        params: {
          language,
          chainId,
        },
      }
    )
    if (response?.status == 200) {
      const result = response.data

      if (result.warnings === undefined || result.action === undefined || result.simulationResults === undefined) {
        return {
          error: new Error('Blowfish API response missing required fields'),
        }
      }
      const resultErr = result.simulationResults.error

      if (resultErr !== null) {
        return {
          error: new Error(resultErr.humanReadableError),
        }
      }
      return result
    } else {
      const errMessage = await response.json()
      return {
        error: new Error(`Blowfish API returned non-200 response: ${response.status}: ${JSON.stringify(errMessage)}`),
      }
    }
  } catch (error) {
    return error
  }
}
