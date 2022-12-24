import { ChainID } from './types'
const getOrigin = (url?: string): string | undefined => {
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

// export const getNetworkNameByChainID = (chainId: ChainID) => {
//   switch (chainId) {
//     case '101':
//       return 'mainnet-beta'
//     case '102':
//       return 'testnet'
//     case '103':
//       return 'devnet'
//     case '1':
//       return 'ethereum'
//   }
// }
