import { ModeToggle } from '@/components/mode-toggle'
import { TaskStatus } from '@/components/task-status'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-4">
      <div className="flex w-full justify-end sm:p-4">
        <ModeToggle />
      </div>
      <TaskStatus />
    </main>
  )
}
