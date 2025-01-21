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
import type { Department, Group } from "@/types/user"
import { CreateGroupDialog } from "./create-group-dialog"

export type GroupsDashboardProps = {
  groups: Group[]
  departments: Department[]
}

export function GroupsDashboard({ groups, departments }: GroupsDashboardProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGroups = groups.filter(group =>
    group.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Панель управления группами</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Создать новую группу</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateGroupDialog groups={groups} departments={departments} />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Искать группы</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Искать группы..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Все группы</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">ID</TableHead>
                <TableHead className="w-80">Название</TableHead>
                <TableHead className="w-52">Кафедра</TableHead>
                <TableHead className="w-40 text-center">Ученики</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGroups.length ? (
                filteredGroups.map(group => (
                  <TableRow key={group.id}>
                    <TableCell>{group.id}</TableCell>
                    <TableCell>{group.title}</TableCell>
                    <TableCell>{group.department.title}</TableCell>
                    <TableCell>
                      {/* <GroupStudentsDialog group={group} /> */}
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <Link
                          to={`/admin/groups/$groupId`}
                          params={{
                            groupId: group.id.toString()
                          }}
                          preload="intent"
                        >
                          <ExternalLink />
                        </Link>
                      </Button>
                      <Button
                        // onClick={() => deleteGroup(group.id)}
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
                      Нет групп для отображения
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
