import type { TaskStatus } from '@/lib/get-status-history'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface StatusSelectProps {
  status: TaskStatus
  setStatus: (status: TaskStatus) => void
}

export function StatusSelect({ status, setStatus }: StatusSelectProps) {
  return (
    <div className="flex justify-end">
      <Select
        value={status}
        onValueChange={(value) => setStatus(value as TaskStatus)}
      >
        <SelectTrigger className="w-[125px]">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Test cases</SelectLabel>
            <SelectItem value="PLANNED">Planned</SelectItem>
            <SelectItem value="STARTED">Started</SelectItem>
            <SelectItem value="UPLOADED">Uploaded</SelectItem>
            <SelectItem value="PENDING_VERIFICATION">Pending</SelectItem>
            <SelectItem value="SUCCESSFUL">Successful</SelectItem>
            <SelectItem value="MISSED">Missed</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
