'use client'

import { useState } from 'react'

import { type TaskStatus, getStatusHistory } from '@/lib/get-status-history'
import { StatusHistory } from '@/components/status-history'
import { StatusSelect } from '@/components/status-select'

export function TaskStatus() {
  const [status, setStatus] = useState<TaskStatus>('PLANNED')
  const statusHistories = getStatusHistory(status)

  return (
    <div className="flex w-full max-w-[500px] flex-col gap-6 overflow-hidden rounded-lg border p-4 shadow-md">
      <StatusSelect status={status} setStatus={setStatus} />
      <StatusHistory statusHistories={statusHistories} />
    </div>
  )
}
