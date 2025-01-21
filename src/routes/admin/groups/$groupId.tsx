import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/admin/groups/$groupId")({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/admin/groups/$groupId"!</div>
}
