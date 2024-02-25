import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export type TimelineItemVariant = {
  icon: LucideIcon
  iconColor: string
  backgroundColor: string
  textColor: string
}

interface TimelineItemProps {
  name: string
  time?: string
  isCurrent: boolean
  isPredicted: boolean
  variant: TimelineItemVariant
}

export function TimelineItem({
  name,
  time,
  isCurrent,
  isPredicted,
  variant,
}: TimelineItemProps) {
  const { icon: Icon, iconColor, backgroundColor, textColor } = variant

  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
          isPredicted ? 'bg-muted' : backgroundColor,
          isCurrent ? 'animate-pulse' : 'opacity-50',
        )}
      >
        <Icon
          className={cn(
            'h-4 w-4',
            isPredicted ? 'text-muted-foreground' : iconColor,
          )}
        />
      </div>
      <div className="flex w-full items-center justify-between gap-4">
        <p
          className={cn(
            'max-w-[100px] text-sm font-semibold',
            isPredicted ? 'text-muted-foreground' : textColor,
            isCurrent ? 'animate-pulse' : 'opacity-50',
          )}
        >
          {name}
        </p>
        <p className="truncate text-sm font-medium text-muted-foreground">
          {time}
        </p>
      </div>
    </div>
  )
}
