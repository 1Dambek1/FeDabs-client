import { Link } from "@tanstack/react-router"
import { BellElectric, GraduationCap, Group, Pen } from "lucide-react"
import { Card, CardHeader } from "./ui/card"

const dashboard = [
  {
    title: "Студенты",
    icon: <Pen />,
    link: "/admin/students"
  },
  {
    title: "Группы",
    icon: <Group />,
    link: "/admin/groups"
  },
  {
    title: "Учителя",
    icon: <GraduationCap />,
    link: "/admin/teachers"
  },
  {
    title: "Кафедры",
    icon: <BellElectric />,
    link: "/admin/departments"
  }
] as const

export const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Панель управления</h1>
      <ul className="flex flex-col gap-7">
        {dashboard.map(item => (
          <li key={item.title}>
            <Card>
              <Link to={item.link} preload="intent">
                <CardHeader className="flex flex-row  items-center gap-2 space-y-0">
                  {item.icon}
                  <span>{item.title}</span>
                </CardHeader>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
