import { ChainID, NetworkType, ScanTransactionPayload } from './utils/types'
import { BlowfishApi, setApiKey } from '../utils/api'
import { API_URL } from '../utils/constants'

export default async function scanTransaction(args: ScanTransactionPayload, blowfishApiKey: string, language?: string) {
  let networkName

  const { chain, chainId, transactions, userAccount, metadata } = args

  // TODO: 1. get network name from chainId
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
    return response?.data
  } catch (error) {
    return error
  }
}
