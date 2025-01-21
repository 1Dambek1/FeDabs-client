import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { deleteGroup } from "@/api/groups"

export function useDeleteGroup() {
  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      toast({
        title: "Группа успешно удалена!"
      })
    },
    onError: err => {
      toast({
        title: "Произошла ошибка при удалении группы!",
        description: err.message
      })
    }
  })
}
