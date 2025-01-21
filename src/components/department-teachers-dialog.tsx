import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog"
import { useDeleteTeacherFromDepartment } from "@/hooks/use-delete-teacher-from-department"
import { Department } from "@/types/user"
import { cn } from "@/lib/utils"

type DepartmentTeacherDialogProps = {
  department: Department
}

export const DepartmentTeachersDialog: React.FC<
  DepartmentTeacherDialogProps
> = ({ department: dept }) => {
  const { mutate: deleteTeacherFromDepartment } =
    useDeleteTeacherFromDepartment()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="sm" variant="secondary">
          Посмотреть
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Учителя</DialogTitle>
        </DialogHeader>
        <ul className="flex flex-col gap-2">
          {dept.teachers.length ? (
            dept.teachers.map((teacher, i, arr) => (
              <li
                key={teacher.id}
                className={cn("flex gap-2 py-2 items-center", {
                  "border-b border-border": i !== arr.length - 1
                })}
              >
                <p>{teacher.name + " " + teacher.surname}</p>
                <p className="text-foreground/75">{teacher.email}</p>
                <p className="ml-auto">{teacher.dob.toLocaleDateString()}</p>
                <Button
                  onClick={() =>
                    deleteTeacherFromDepartment({
                      departmentId: dept.id,
                      teacherId: teacher.id
                    })
                  }
                  size="icon"
                  variant="ghost"
                  className="hover:bg-destructive hover:text-destructive-foreground"
                >
                  <Trash />
                </Button>
              </li>
            ))
          ) : (
            <li>
              <p>Учителей нет на данной кафедре</p>
            </li>
          )}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
