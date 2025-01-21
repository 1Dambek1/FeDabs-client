import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { deleteDepartment } from "@/api/department"

export function useDeleteDepartment() {
  return useMutation({
    mutationFn: deleteDepartment,
    onSuccess: () => {
      toast({
        title: "Кафедра успешно удалена!"
      })
    },
    onError: () => {
      toast({
        title: "Произошла ошибка при удалении кафедры"
      })
    }
  })
}
