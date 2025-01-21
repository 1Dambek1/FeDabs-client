"use client"

import { zodResolver } from "@hookform/resolvers/zod"
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
import { useCreateGroup } from "@/hooks/use-create-group"
import { GroupsDashboardProps } from "./groups-dashboard"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form"
import { createGroupSchema, type CreateGroupSchema } from "@/lib/schemas"

export function CreateGroupDialog({ departments }: GroupsDashboardProps) {
  const { mutate: createGroup } = useCreateGroup()

  const form = useForm<CreateGroupSchema>({
    resolver: zodResolver(createGroupSchema)
  })

  const [open, setOpen] = useState(false)

  const handleCreate = (data: CreateGroupSchema) => {
    createGroup(data)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Создать группу</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Создать новую группу</DialogTitle>
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
              name="departmentId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-left">Кафедра</FormLabel>
                  <Select
                    onValueChange={v => field.onChange(parseInt(v))}
                    defaultValue=""
                  >
                    <FormControl>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Выбрать кафедру" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departments.length ? (
                        departments.map(dept => (
                          <SelectItem key={dept.id} value={dept.id.toString()}>
                            {dept.title}
                          </SelectItem>
                        ))
                      ) : (
                        <p className="text-sm text-center p-2">
                          Кафедры не нашлось.
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
