import { ScanTransactionPayload } from './utils/types'
import scanTransction from './methods/scanTransaction'

export class Blowfish {
  blowfishApiKey: string

  constructor(blowfishApiKey: string) {
    this.blowfishApiKey = blowfishApiKey
  }

  /**
   * This is a method to scan and evaluate a transaction.
   * @param {ScanTransactionPayload} args - The object containing the transaction payload
   */
  public async scanTransction(args: ScanTransactionPayload) {
    return await scanTransction({ ...args, blowfishApiKey: this.blowfishApiKey })
  }
}
