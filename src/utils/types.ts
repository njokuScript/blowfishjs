// export enum Action {
//   None = 'NONE',
//   Warn = 'WARN',
//   Block = 'BLOCK',
//   HardBlock = 'HARD_BLOCK',
// }

// export enum Sign {
//   Plus = 'PLUS',
//   Minus = 'MINUS',
// }

// export interface Diff {
//   sign: Sign
//   digits: number
// }

// export interface SolTransferData {
//   symbol: string
//   name: string
//   decimals: number
//   diff: Diff
// }

// export interface SplTransferData {
//   symbol: string
//   name: string
//   mint: string
//   decimals: number
//   diff: Diff
// }

// export interface SplApprovalData {
//   delegate: string
//   symbol: string
//   name: string
//   mint: string
//   decimals: number
//   diff: Diff
// }

// export interface RawInfo {
//   kind: StateChangeKind
//   data: SolTransferData | SplTransferData | SplApprovalData
// }

// export interface ExpectedStateChange {
//   humanReadableDiff: string
//   rawInfo: RawInfo
// }

// export enum StateChangeKind {
//   SolTransfer = 'SOL_TRANSFER',
//   SplTransfer = 'SPL_TRANSFER',
//   SplApproval = 'SPL_APPROVAL',
// }

// export interface ComputedTxnsScanEvaluation {
//   isBlockRecommended: boolean
//   isRecentBlockhashExpired: boolean
// }

// export interface TxnsScanResult {
//   isLoading: boolean
//   error: Error | null
//   evaluation?: TxnsScanEvaluation
//   computedEvaluation?: ComputedTxnsScanEvaluation
// }

// export enum WarningSeverity {
//   Critical = 'CRITICAL',
//   Warning = 'WARNING',
// }

// export interface Warning {
//   severity: WarningSeverity
//   message: string
// }

// export interface TxnsScanEvaluation {
//   action: string
//   warnings: Warning[]
//   simulationResults: SimulationResults
// }

// export interface SimulationResults {
//   isRecentBlockhashExpired: boolean
//   expectedStateChanges: ExpectedStateChange[]
//   error: SimulationError | null
//   raw: SimulatedTransactionResponse
// }

// export interface SimulationError {
//   humanReadableError: string
//   kind: string
// }

// export enum Action {
//   None = 'NONE',
//   Warn = 'WARN',
//   Block = 'BLOCK',
//   HardBlock = 'HARD_BLOCK',
// }

export type ChainID = 101 | 102 | 103 | 1 | 137 | 5

export type Chain = 'ethereum' | 'solana' | 'polygon'

export type NetworkType = 'devnet' | 'testnet' | 'mainnet' | 'goerli'

export type ScanTransactionPayload = {
  network: NetworkType
  chain: Chain
  transaction: string[] | TxObject
  userAccount: string
  metadata: object | {}
}

export type TxObject = {
  from: string
  to: string
  value: string
  data: string
}
