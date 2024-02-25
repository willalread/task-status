import {
  CalendarDays,
  Timer,
  UploadCloud,
  CircleDashed,
  CheckCircle,
  X,
} from 'lucide-react'

import type { IStatusHistory } from '@/lib/get-status-history'
import { cn } from '@/lib/utils'
import {
  TimelineItem,
  type TimelineItemVariant,
} from '@/components/timeline-item'

const statusVariants: {
  [key: string]: TimelineItemVariant
} = {
  PLANNED: {
    icon: CalendarDays,
    iconColor: 'text-purple-800 dark:text-purple-100',
    backgroundColor: 'bg-purple-200 dark:bg-purple-600',
    textColor: 'text-purple-600 dark:text-purple-500',
  },
  STARTED: {
    icon: Timer,
    iconColor: 'text-blue-800 dark:text-blue-100',
    backgroundColor: 'bg-blue-200 dark:bg-blue-600',
    textColor: 'text-blue-600 dark:text-blue-500',
  },
  UPLOADED: {
    icon: UploadCloud,
    iconColor: 'text-orange-800 dark:text-orange-100',
    backgroundColor: 'bg-orange-200 dark:bg-orange-600',
    textColor: 'text-orange-600 dark:text-orange-500',
  },
  PENDING_VERIFICATION: {
    icon: CircleDashed,
    iconColor: 'text-yellow-800 dark:text-yellow-100',
    backgroundColor: 'bg-yellow-200 dark:bg-yellow-600',
    textColor: 'text-yellow-600 dark:text-yellow-500',
  },
  SUCCESSFUL: {
    icon: CheckCircle,
    iconColor: 'text-green-800 dark:text-green-100',
    backgroundColor: 'bg-green-200 dark:bg-green-600',
    textColor: 'text-green-600 dark:text-green-500',
  },
  MISSED: {
    icon: X,
    iconColor: 'text-red-800 dark:text-red-100',
    backgroundColor: 'bg-red-200 dark:bg-red-600',
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
        const isPredictedStatus = !statusHistory.statusTime

        const isCurrentStatus =
          !isPredictedStatus && !statusHistories[index + 1]?.statusTime

        return (
          <div key={index} className="space-y-2">
            {index !== 0 ? (
              <div
                className={cn(
                  'ml-3.5 h-6 w-0 border',
                  isPredictedStatus && 'border-dashed',
                )}
              />
            ) : null}
            <TimelineItem
              name={statusHistory.status.replace('_', ' ')}
              time={statusHistory.statusTime}
              isCurrent={isCurrentStatus}
              isPredicted={isPredictedStatus}
              variant={statusVariants[statusHistory.status]}
            />
          </div>
        )
      })}
    </div>
  )
}
