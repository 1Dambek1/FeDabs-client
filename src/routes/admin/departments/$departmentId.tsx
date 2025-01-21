import { createFileRoute, notFound } from "@tanstack/react-router"
import { getDepartment } from "@/api/department"

export const Route = createFileRoute("/admin/departments/$departmentId")({
  loader: async ({ params }) => {
    const departmentId = parseInt(params.departmentId)

    if (isNaN(departmentId)) {
      throw notFound()
    }

    return getDepartment(departmentId)
  },
  staleTime: 60_000,
  component: RouteComponent
})

function RouteComponent() {
  const _department = Route.useLoaderData()

  return <div></div>
}
