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
  component: RouteComponent
})

function RouteComponent() {
  const department = Route.useLoaderData()

  return <div></div>
}
