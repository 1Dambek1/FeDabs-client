import { createFileRoute, redirect } from "@tanstack/react-router"
import { AxiosError } from "axios"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Role } from "@/types/user"
import { fetchCurrentUser } from "@/api/auth"

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
  beforeLoad: async () => {
    try {
      const user = await fetchCurrentUser()

      if (user.role !== Role.Admin) return redirect({ to: "/profile" })
    } catch (error) {
      if (error instanceof AxiosError && error.code === "401") {
        return redirect({ to: "/auth/login" })
      }
    }
  }
})

function RouteComponent() {
  return <AdminDashboard />
}
