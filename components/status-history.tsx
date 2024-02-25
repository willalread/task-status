import {
  CalendarDays,
  Timer,
  UploadCloud,
  CircleDashed,
  CheckCircle,
  XCircle,
  type LucideIcon,
} from 'lucide-react'

import type { IStatusHistory } from '@/lib/get-status-history'
import { cn } from '@/lib/utils'

const statusVariants: {
  [key: string]: {
    icon: LucideIcon
    iconColor: string
    iconBackgroundColor: string
    textColor: string
  }
} = {
  PLANNED: {
    icon: CalendarDays,
    iconColor: 'text-purple-800 dark:text-purple-100',
    iconBackgroundColor: 'bg-purple-200 dark:bg-purple-600',
    textColor: 'text-purple-600 dark:text-purple-500',
  },
  STARTED: {
    icon: Timer,
    iconColor: 'text-blue-800 dark:text-blue-100',
    iconBackgroundColor: 'bg-blue-200 dark:bg-blue-600',
    textColor: 'text-blue-600 dark:text-blue-500',
  },
  UPLOADED: {
    icon: UploadCloud,
    iconColor: 'text-orange-800 dark:text-orange-100',
    iconBackgroundColor: 'bg-orange-200 dark:bg-orange-600',
    textColor: 'text-orange-600 dark:text-orange-500',
  },
  PENDING_VERIFICATION: {
    icon: CircleDashed,
    iconColor: 'text-yellow-800 dark:text-yellow-100',
    iconBackgroundColor: 'bg-yellow-200 dark:bg-yellow-600',
    textColor: 'text-yellow-600 dark:text-yellow-500',
  },
  SUCCESSFUL: {
    icon: CheckCircle,
    iconColor: 'text-green-800 dark:text-green-100',
    iconBackgroundColor: 'bg-green-200 dark:bg-green-600',
    textColor: 'text-green-600 dark:text-green-500',
  },
  MISSED: {
    icon: XCircle,
    iconColor: 'text-red-800 dark:text-red-100',
    iconBackgroundColor: 'bg-red-200 dark:bg-red-600',
    textColor: 'text-red-600 dark:text-red-500',
  },
}

export function StatusHistory({
  statusHistories,
}: {
  statusHistories: IStatusHistory[]
}) {
  return (
    <div className="space-y-2">
      {statusHistories.map((statusHistory, index) => {
        const {
          icon: Icon,
          iconColor,
          iconBackgroundColor,
          textColor,
        } = statusVariants[statusHistory.status]

        const isPredictedStatus = !statusHistory.statusTime

        const nextIsPredictedStatus = !statusHistories[index + 1]?.statusTime

        const isCurrentStatus = !isPredictedStatus && nextIsPredictedStatus

        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-4">
              <Icon
                className={cn(
                  'h-8 w-8 shrink-0 rounded-full p-2',
                  !isPredictedStatus
                    ? `${iconBackgroundColor} ${iconColor}`
                    : 'bg-muted text-muted-foreground',
                  isCurrentStatus ? 'animate-pulse' : 'opacity-50',
                )}
              />
              <div className="flex w-full items-center justify-between gap-4">
                <p
                  className={cn(
                    'max-w-[100px] text-sm font-semibold',
                    !isPredictedStatus ? textColor : 'text-muted-foreground',
                    isCurrentStatus ? 'animate-pulse' : 'opacity-50',
                  )}
                >
                  {statusHistory.status.replace('_', ' ')}
                </p>
                <p className="truncate text-sm font-medium text-muted-foreground">
                  {statusHistory.statusTime}
                </p>
              </div>
            </div>
            {index !== statusHistories.length - 1 ? (
              <div
                className={cn(
                  'ml-3.5 h-6 w-0 border',
                  nextIsPredictedStatus && 'border-dashed',
                )}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
