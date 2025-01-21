import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { deleteTeacherFromDepartment } from "@/api/department"

export function useDeleteTeacherFromDepartment() {
  return useMutation({
    mutationFn: deleteTeacherFromDepartment,
    onSuccess: () => {
      toast({
        title: "Учитель успешно удален!"
      })
    },
    onError: () => {
      toast({
        title: "Произошла ошибка при удалении учителя"
      })
    }
  })
}
