import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { createGroup } from "@/api/groups"

export function useCreateGroup() {
  return useMutation({
    mutationFn: createGroup,
    onSuccess: () => {
      toast({
        title: "Группа успешно создана"
      })
    },
    onError: error => {
      toast({
        title: "Ошибка создания группы",
        description: error.message
      })
    }
  })
}
