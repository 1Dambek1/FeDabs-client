import { AdminNavList } from "./admin-nav-list"

export const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Панель управления</h1>
      <AdminNavList />
    </div>
  )
}
