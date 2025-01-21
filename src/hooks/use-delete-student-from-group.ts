import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { deleteStudentFromGroup } from "@/api/groups"

export function useDeleteStudentFromGroup() {
  return useMutation({
    mutationFn: deleteStudentFromGroup,
    onSuccess: () => {
      toast({
        title: "Студент успешно удален"
      })
    },
    onError: error => {
      toast({
        title: "Ошибка удаления студента",
        description: error.message
      })
    }
  })
}
