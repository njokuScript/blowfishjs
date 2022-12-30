import { ChainID, NetworkTypes } from './types'
export const getOrigin = (url?: string): string | undefined => {
  if (!url) {
    return undefined
  }
  try {
    const _url = new URL(url)
    return _url.origin
  } catch (err) {
    return undefined
  }
}

export const getNetworkByChainID = (chainId: ChainID | number): string | undefined => {
  switch (chainId) {
    case 101:
      return NetworkTypes.solana_mainnet
    case 102:
      return NetworkTypes.solana_testnet
    case 103:
      return NetworkTypes.solana_devnet
    case 1 | 137:
      return NetworkTypes.mainnet
    case 5:
      return NetworkTypes.goerli
  }
}
