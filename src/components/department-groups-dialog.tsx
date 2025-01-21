import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog"
import { useDeleteGroup } from "@/hooks/use-delete-group"
import { Department } from "@/types/user"
import { cn } from "@/lib/utils"

type DepartmentGroupsDialogProps = {
  department: Department
}

export const DepartmentGroupsDialog: React.FC<DepartmentGroupsDialogProps> = ({
  department: dept
}) => {
  const { mutate: deleteGroup } = useDeleteGroup()

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
          {dept.groups.length ? (
            dept.groups.map((group, i, arr) => (
              <li
                key={group.id}
                className={cn("flex gap-2 py-2 items-center", {
                  "border-b border-border": i !== arr.length - 1
                })}
              >
                <p>{group.title}</p>
                <Button
                  onClick={() => deleteGroup(group.id)}
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
              <p>Групп нет на данной кафедре</p>
            </li>
          )}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
