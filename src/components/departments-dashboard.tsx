import { Link, useRouter } from "@tanstack/react-router"
import { ExternalLink, Trash } from "lucide-react"
import { useState } from "react"
import { useDeleteDepartment } from "@/hooks/use-delete-department"
import { toast } from "@/hooks/use-toast"
import type { Department } from "@/types/user"
import { CreateDepartmentDialog } from "./create-department-dialog"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table"

type DepartmentsDashboardProps = {
  departments: Department[]
}

export function DepartmentsDashboard({
  departments
}: DepartmentsDashboardProps) {
  const router = useRouter()
  const { mutate: deleteDepartment } = useDeleteDepartment()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDepartments = departments.filter(dept =>
    dept.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Панель управления кафедрами</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Создать новую кафедру</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateDepartmentDialog departments={departments} />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Искать кафедры</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Искать кафедры..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Все кафедры</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">ID</TableHead>
                <TableHead className="w-72">Название</TableHead>
                <TableHead>Заведующий</TableHead>
                <TableHead>Учителя</TableHead>
                <TableHead>Группы</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartments.length ? (
                filteredDepartments.map(dept => (
                  <TableRow key={dept.id}>
                    <TableCell>{dept.id}</TableCell>
                    <TableCell>mmmmmmmmmmmmmmmmmmmm</TableCell>
                    <TableCell>{`${dept.head.name} ${dept.head.surname}`}</TableCell>
                    <TableCell>
                      {dept.teachers
                        .map(t => `${t.name} ${t.surname}`)
                        .join(", ")}
                    </TableCell>
                    <TableCell>{dept.groups.length}</TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <Link
                          to={`/admin/departments/$departmentId`}
                          params={{
                            departmentId: dept.id.toString()
                          }}
                          preload="intent"
                        >
                          <ExternalLink />
                        </Link>
                      </Button>
                      <Button
                        onClick={() => {
                          deleteDepartment(dept.id)
                          router.navigate({ to: "/admin/departments" })
                          toast({
                            title: "Кафедра удалена успешно!"
                          })
                        }}
                        size="icon"
                        variant="ghost"
                        className="hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>
                    <p className="text-center py-14">
                      Нет кафедр для отображения
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
