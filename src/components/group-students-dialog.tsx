import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog"
import { useDeleteStudentFromGroup } from "@/hooks/use-delete-student-from-group"
import type { Group } from "@/types/user"
import { cn } from "@/lib/utils"

type GroupTeacherDialogProps = {
  group: Group
}

export const GroupStudentsDialog: React.FC<GroupTeacherDialogProps> = ({
  group
}) => {
  const { mutate: deleteStudentFromGroup } = useDeleteStudentFromGroup()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="sm" variant="secondary">
          Посмотреть
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Студенты</DialogTitle>
        </DialogHeader>
        <ul className="flex flex-col gap-2">
          {group.students.length ? (
            group.students.map((student, i, arr) => (
              <li
                key={student.id}
                className={cn("flex gap-2 py-2 items-center", {
                  "border-b border-border": i !== arr.length - 1
                })}
              >
                <p>{student.name + " " + student.surname}</p>
                <p className="text-foreground/75">{student.email}</p>
                <p className="ml-auto">{student.dob.toLocaleDateString()}</p>
                <Button
                  onClick={() =>
                    deleteStudentFromGroup({
                      groupId: group.id,
                      studentId: student.id
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
              <p>Студентов нет в данной группе</p>
            </li>
          )}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
