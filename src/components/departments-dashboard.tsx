import { Link } from "@tanstack/react-router"
import { ExternalLink, Trash } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { useDeleteDepartment } from "@/hooks/use-delete-department"
import type { Department } from "@/types/user"
import { AdminNavList } from "./admin-nav-list"
import { CreateDepartmentDialog } from "./create-department-dialog"
import { DepartmentGroupsDialog } from "./department-groups-dialog"
import { DepartmentTeachersDialog } from "./department-teachers-dialog"

type DepartmentsDashboardProps = {
  departments: Department[]
}

export function DepartmentsDashboard({
  departments
}: DepartmentsDashboardProps) {
  const { mutate: deleteDepartment } = useDeleteDepartment()

  const [searchTerm, setSearchTerm] = useState("")

  const filteredDepartments = departments.filter(dept =>
    dept.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Панель управления кафедрами</h1>

      <Card>
        <CardHeader>
          <CardTitle>Создать новую кафедру</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateDepartmentDialog departments={departments} />
        </CardContent>
      </Card>

      <Card>
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
                <TableHead className="w-80">Название</TableHead>
                <TableHead className="w-64">Заведующий</TableHead>
                <TableHead className="w-40 text-center">Учителя</TableHead>
                <TableHead className="w-40 text-center">Группы</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartments.length ? (
                filteredDepartments.map(dept => (
                  <TableRow key={dept.id}>
                    <TableCell>{dept.id}</TableCell>
                    <TableCell>{dept.title}</TableCell>
                    <TableCell>{`${dept.head.name} ${dept.head.surname}`}</TableCell>
                    <TableCell>
                      <DepartmentTeachersDialog department={dept} />
                    </TableCell>
                    <TableCell>
                      <DepartmentGroupsDialog
                        departments={departments}
                        department={dept}
                      />
                    </TableCell>
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
                        onClick={() => deleteDepartment(dept.id)}
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

      <AdminNavList className="gap-5" />
    </div>
  )
}
