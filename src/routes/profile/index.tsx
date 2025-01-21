import { fetchCurrentUser } from '@/api/auth'
import ProfileCard from '@/components/profile-card'
import { useUser } from '@/hooks/use-user'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { AxiosError } from 'axios'

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
   beforeLoad: async () => {
      try {
        const user = await fetchCurrentUser()
  
        if (!user) return redirect({ to: "/auth/login" })
      } catch (error) {
        if (error instanceof AxiosError && error.code === "401") {
          return
        }
      }
    }
})

function RouteComponent() {
  const { data } = useUser()
  
  return <div><ProfileCard user={data}  /></div>
}
