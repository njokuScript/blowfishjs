import { Chain, ChainID, TxObject } from '../utils/types'
import { BlowfishApi, setApiKey } from '../utils/api'
import { getNetworkNameByChainID } from '../utils/helpers'
import { API_URL } from '../utils/constants'

type ScanTransactionParams = {
  chain: Chain
  chainId: ChainID
  transactions: string[] | TxObject
  userAccount: string
  language?: string
  metadata: object | {}
  blowfishApiKey: string
}
export default async function (args: ScanTransactionParams) {
  const { blowfishApiKey, chain, chainId, transactions, userAccount, language, metadata } = args

  // TODO: 1. get network name from chainId
  const networkName = getNetworkNameByChainID(chainId)

  try {
    await setApiKey(blowfishApiKey)

    const response = await BlowfishApi.post(
      `${API_URL}/${chain}/v0/${networkName}/scan/transactions`,
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
    console.log(response)
  } catch (error) {
    return error
  }
}
