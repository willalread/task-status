export type TaskStatus =
  | 'PLANNED'
  | 'STARTED'
  | 'UPLOADED'
  | 'PENDING_VERIFICATION'
  | 'SUCCESSFUL'
  | 'MISSED'

export interface IStatusHistory {
  status: TaskStatus
  statusTime?: string
}

// Would fetch the status history of a task and add forecasted statuses based on the current status
// For test cases, the current status is passed as an argument
export function getStatusHistory(task: TaskStatus): IStatusHistory[] {
  switch (task) {
    case 'PLANNED':
      return forecastStatuses(initialStatusesPlanned)
    case 'STARTED':
      return forecastStatuses(initialStatusesStarted)
    case 'UPLOADED':
      return forecastStatuses(initialStatusesUploaded)
    case 'PENDING_VERIFICATION':
      return forecastStatuses(initialStatusesPending)
    case 'SUCCESSFUL':
      return forecastStatuses(initialStatusesSuccessful)
    case 'MISSED':
      return forecastStatuses(initialStatusesFailed)
    default:
      return []
  }
}

// Add forecasted statuses based on the current status of the task
function forecastStatuses(currentStatuses: IStatusHistory[]): IStatusHistory[] {
  const currentStatus = currentStatuses[currentStatuses.length - 1].status

  const predictedStatuses: IStatusHistory[] = [
    { status: 'STARTED' },
    { status: 'UPLOADED' },
    { status: 'PENDING_VERIFICATION' },
    { status: 'SUCCESSFUL' },
  ]

  const forecastedStatuses: IStatusHistory[] = [...currentStatuses]

  switch (currentStatus) {
    case 'PLANNED':
      forecastedStatuses.push(...predictedStatuses.slice(0))
      break
    case 'STARTED':
      forecastedStatuses.push(...predictedStatuses.slice(1))
      break
    case 'UPLOADED':
      forecastedStatuses.push(...predictedStatuses.slice(2))
      break
    case 'PENDING_VERIFICATION':
      forecastedStatuses.push(...predictedStatuses.slice(3))
      break
  }

  return forecastedStatuses
}

// Test cases
const initialStatusesPlanned: IStatusHistory[] = [
  { status: 'PLANNED', statusTime: '2024-02-06T20:49:27.723Z' },
]

const initialStatusesStarted: IStatusHistory[] = [
  { status: 'PLANNED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'STARTED', statusTime: '2024-02-06T20:49:27.723Z' },
]

const initialStatusesUploaded: IStatusHistory[] = [
  { status: 'PLANNED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'STARTED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'UPLOADED', statusTime: '2024-02-06T20:49:27.723Z' },
]

const initialStatusesPending: IStatusHistory[] = [
  { status: 'PLANNED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'STARTED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'UPLOADED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'PENDING_VERIFICATION', statusTime: '2024-02-06T21:49:27.723Z' },
]

const initialStatusesSuccessful: IStatusHistory[] = [
  { status: 'PLANNED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'STARTED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'UPLOADED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'PENDING_VERIFICATION', statusTime: '2024-02-06T21:49:27.723Z' },
  { status: 'SUCCESSFUL', statusTime: '2024-02-06T23:49:27.723Z' },
]

const initialStatusesFailed: IStatusHistory[] = [
  { status: 'PLANNED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'STARTED', statusTime: '2024-02-06T20:49:27.723Z' },
  { status: 'MISSED', statusTime: '2024-02-06T20:49:27.723Z' },
]
