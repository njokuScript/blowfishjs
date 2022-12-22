export interface ComputedTxnsScanEvaluation {
  isBlockRecommended: boolean
  isRecentBlockhashExpired: boolean
}

export interface TxnsScanResult {
  isLoading: boolean
  error: Error | null
  evaluation?: TxnsScanEvaluation
  computedEvaluation?: ComputedTxnsScanEvaluation
}
export enum WarningSeverity {
  Critical = 'CRITICAL',
  Warning = 'WARNING',
}

export interface Warning {
  severity: WarningSeverity
  message: string
}

export interface TxnsScanEvaluation {
  action: string
  warnings: Warning[]
  simulationResults: SimulationResults
}

export enum Action {
  None = 'NONE',
  Warn = 'WARN',
  Block = 'BLOCK',
  HardBlock = 'HARD_BLOCK',
}
