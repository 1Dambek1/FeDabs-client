import { Link } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { useCreateDepartment } from "@/hooks/use-create-department"
import type { Department } from "@/types/user"
import {
  CreateDepartmentDialog,
  CreateDepartmentDialogProps
} from "./create-department-dialog"
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
  const { mutate: createDepartment } = useCreateDepartment()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDepartments = departments.filter(dept =>
    dept.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreateDepartment: CreateDepartmentDialogProps["onCreateDepartment"] =
    (title, headId) => {
      createDepartment({ title, head_id: headId })
    }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Панель управления кафедрами</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Создать новую кафедру</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateDepartmentDialog
            departments={departments}
            onCreateDepartment={handleCreateDepartment}
          />
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
                <TableHead>ID</TableHead>
                <TableHead>Название</TableHead>
                <TableHead>Заведующий</TableHead>
                <TableHead>Учителя</TableHead>
                <TableHead>Группы</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartments.map(dept => (
                <TableRow key={dept.id}>
                  <TableCell>{dept.id}</TableCell>
                  <TableCell>{dept.title}</TableCell>
                  <TableCell>{`${dept.head.name} ${dept.head.surname}`}</TableCell>
                  <TableCell>
                    {dept.teachers
                      .map(t => `${t.name} ${t.surname}`)
                      .join(", ")}
                  </TableCell>
                  <TableCell>{dept.groups.length}</TableCell>
                  <TableCell className="flex justify-end">
                    <Button size="icon" variant="ghost" asChild>
                      <Link
                        to={`/admin/departments/$departmentId`}
                        params={{
                          departmentId: dept.id.toString()
                        }}
                      >
                        <ExternalLink />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
