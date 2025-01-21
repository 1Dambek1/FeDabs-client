"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "@tanstack/react-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
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
import { useCreateDepartment } from "@/hooks/use-create-department"
import { useUsers } from "@/hooks/use-users"
import { type Department, Role, type UserHeadDepartment } from "@/types/user"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form"
import { Skeleton } from "./ui/skeleton"
import { createDepartmentSchema, CreateDepartmentSchema } from "@/lib/schemas"

export type CreateDepartmentDialogProps = {
  departments: Department[]
}

export function CreateDepartmentDialog({
  departments
}: CreateDepartmentDialogProps) {
  const router = useRouter()
  const { data, isLoading } = useUsers({ role: Role.HeadDepartment })
  const { mutate: createDepartment } = useCreateDepartment()

  const form = useForm<CreateDepartmentSchema>({
    resolver: zodResolver(createDepartmentSchema)
  })

  const heads = data?.filter(head => {
    return !departments.some(d => d.head.id === head.id)
  }) as UserHeadDepartment[] | undefined

  const [open, setOpen] = useState(false)

  const handleCreate = (data: CreateDepartmentSchema) => {
    router.navigate({ to: "/admin/departments" })

    createDepartment({ title: data.title, head_id: data.headId })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Создать кафедру</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Создать новую кафедру</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="grid gap-2 py-4"
            onSubmit={form.handleSubmit(handleCreate)}
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-left">Название</FormLabel>
                  <FormControl>
                    <Input id="title" className="col-span-3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="headId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Заведующий</FormLabel>
                  <Select
                    onValueChange={v => field.onChange(parseInt(v))}
                    defaultValue=""
                  >
                    <FormControl>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Выбрать заведующего" />
                      </SelectTrigger>
                    </FormControl>
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
                        <p className="text-sm text-center p-2">
                          Заведующих кафедрами не нашлось.
                        </p>
                      )}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button className="mt-4">Create</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
