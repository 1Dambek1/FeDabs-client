import { createFileRoute } from "@tanstack/react-router"
import { DepartmentsDashboard } from "@/components/departments-dashboard"
import { getDepartments } from "@/api/department"

export const Route = createFileRoute("/admin/departments/")({
  component: RouteComponent,
  loader: () => {
    return getDepartments()
  }
})

function RouteComponent() {
  const departments = Route.useLoaderData()

  return <DepartmentsDashboard departments={departments} />
}
