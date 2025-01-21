import { createFileRoute } from "@tanstack/react-router"
import { GroupsDashboard } from "@/components/groups-dashboard"
import { getDepartments } from "@/api/department"
import { getGroups } from "@/api/groups"

export const Route = createFileRoute("/admin/groups/")({
  component: RouteComponent,
  loader: async () => {
    const [groups, departments] = await Promise.all([
      getGroups(),
      getDepartments()
    ])

    return {
      groups,
      departments
    }
  }
})

function RouteComponent() {
  const { groups, departments } = Route.useLoaderData()

  return <GroupsDashboard groups={groups} departments={departments} />
}
