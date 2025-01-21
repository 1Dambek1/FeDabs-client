import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { createDepartment } from "@/api/department"

export function useCreateDepartment() {
  return useMutation({
    mutationFn: createDepartment,
    onSuccess: () => {
      toast({
        title: "Кафедра успешно создана!"
      })
    },
    onError: () => {
      toast({
        title: "Произошла ошибка при создании кафедры"
      })
    }
  })
}
