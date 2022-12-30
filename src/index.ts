import { ScanTransactionPayload } from './utils/types'
import scanTransaction from './methods/scanTransaction'

export default class Blowfish {
  blowfishApiKey: string

  constructor(blowfishApiKey: string) {
    this.blowfishApiKey = blowfishApiKey
  }

  /**
   * This is a method to scan and evaluate a transaction.
   * @param {ScanTransactionPayload} args - The object containing the transaction payload
   */
  public async scanTransaction(args: ScanTransactionPayload) {
    return await scanTransaction({ ...args, blowfishApiKey: this.blowfishApiKey })
  }
}
