"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { useUsers } from "@/hooks/use-users"
import { type Department, Role, type UserHeadDepartment } from "@/types/user"
import { Skeleton } from "./ui/skeleton"

export type CreateDepartmentDialogProps = {
  departments: Department[]
  onCreateDepartment: (title: string, head: UserHeadDepartment) => void
}

export function CreateDepartmentDialog({
  departments,
  onCreateDepartment
}: CreateDepartmentDialogProps) {
  const { data, isLoading } = useUsers({ role: Role.HeadDepartment })

  const heads = data?.filter(head => {
    return !departments.some(d => d.head.id === head.id)
  }) as UserHeadDepartment[] | undefined

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [selectedHeadId, setSelectedHeadId] = useState<string>("")

  const handleCreate = () => {
    if (!heads) return

    const selectedHead = heads.find(
      head => head.id.toString() === selectedHeadId
    )

    if (title && selectedHead) {
      onCreateDepartment(title, selectedHead)
      setOpen(false)
      setTitle("")
      setSelectedHeadId("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Department</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Department</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="title" className="text-right">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="head" className="text-right">
              Head
            </label>
            <Select onValueChange={setSelectedHeadId} value={selectedHeadId}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a head" />
              </SelectTrigger>
              <SelectContent>
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton className="h-4 w-full" key={i} />
                  ))
                ) : heads?.length ? (
                  heads.map(head => (
                    <SelectItem key={head.id} value={head.id.toString()}>
                      {`${head.name} ${head.surname}`}
                    </SelectItem>
                  ))
                ) : (
                  <p className="text-sm text-center">
                    Заведующих кафедрами не нашлось.
                  </p>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleCreate} disabled={!title || !selectedHeadId}>
          Create
        </Button>
      </DialogContent>
    </Dialog>
  )
}
