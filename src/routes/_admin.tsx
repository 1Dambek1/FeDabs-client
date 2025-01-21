import { Outlet, createFileRoute } from "@tanstack/react-router"
import { AdminNavList } from "@/components/admin-nav-list"

export const Route = createFileRoute("/_admin")({
  component: LayoutComponent
})

function LayoutComponent() {
  return (
    <div>
      <Outlet />
      <AdminNavList />
    </div>
  )
}
