import { useState } from "react"
import { useCreateDepartment } from "@/hooks/use-create-department"
import type { Department } from "@/types/user"
import {
  CreateDepartmentDialog,
  CreateDepartmentDialogProps
} from "./create-department-dialog"
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
    (title, head) => {
      createDepartment({ title, head_id: head.id })
    }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Departments Admin</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Create New Department</CardTitle>
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
          <CardTitle>Search Departments</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Search departments..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Departments List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Head</TableHead>
                <TableHead>Teachers</TableHead>
                <TableHead>Groups</TableHead>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
