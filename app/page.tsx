import { TaskStatus } from '@/components/task-status'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-12">
      <TaskStatus />
    </main>
  )
}
