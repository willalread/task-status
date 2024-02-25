import {
  CalendarDays,
  Timer,
  UploadCloud,
  CircleDashed,
  CheckCircle,
  XCircle,
} from 'lucide-react'

import type { IStatusHistory } from '@/lib/get-status-history'
import { cn } from '@/lib/utils'

const statusVariants = {
  PLANNED: {
    icon: CalendarDays,
    textColor: 'text-purple-700',
    backgroundColor: 'bg-purple-200',
  },
  STARTED: {
    icon: Timer,
    textColor: 'text-blue-700',
    backgroundColor: 'bg-blue-200',
  },
  UPLOADED: {
    icon: UploadCloud,
    textColor: 'text-orange-700',
    backgroundColor: 'bg-orange-200',
  },
  PENDING_VERIFICATION: {
    icon: CircleDashed,
    textColor: 'text-yellow-700',
    backgroundColor: 'bg-yellow-200',
  },
  SUCCESSFUL: {
    icon: CheckCircle,
    textColor: 'text-green-700',
    backgroundColor: 'bg-green-200',
  },
  MISSED: {
    icon: XCircle,
    textColor: 'text-red-700',
    backgroundColor: 'bg-red-200',
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
          textColor,
          backgroundColor,
        } = statusVariants[statusHistory.status]

        const isCurrentStatus =
          statusHistory.statusTime && !statusHistories[index + 1]?.statusTime

        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Icon
                  className={cn(
                    'h-8 w-8 rounded-full p-2',
                    textColor,
                    backgroundColor,
                    !statusHistory.statusTime &&
                      'bg-gray-200 text-gray-700 opacity-50',
                    isCurrentStatus && 'animate-pulse',
                  )}
                />
                <p
                  className={cn(
                    'text-sm font-semibold',
                    statusHistory.statusTime
                      ? textColor
                      : 'text-muted-foreground',
                  )}
                >
                  {statusHistory.status.replace('_', ' ')}
                </p>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {statusHistory.statusTime}
              </p>
            </div>
            {index !== statusHistories.length - 1 ? (
              <div
                className={cn(
                  'ml-3.5 h-6 w-0 border',
                  !statusHistories[index + 1]?.statusTime && 'border-dashed',
                )}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
