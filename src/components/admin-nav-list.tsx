import { Link } from "@tanstack/react-router"
import { BellElectric, GraduationCap, Group, Pen } from "lucide-react"
import { cn } from "@/lib/utils"
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

type AdminNavListProps = {
  className?: string
}

export const AdminNavList: React.FC<AdminNavListProps> = ({ className }) => {
  return (
    <ul className={cn("flex flex-col gap-7", className)}>
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
  )
}
