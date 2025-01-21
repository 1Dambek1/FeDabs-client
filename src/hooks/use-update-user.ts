import { useMutation } from "@tanstack/react-query"
import { UpdateCurrentUser } from "@/api/auth"
import { toast } from "./use-toast"

export function useUpdateUser() {
  return useMutation({
    mutationFn: UpdateCurrentUser,
    onSuccess: ()=>{
        toast({
            title: "Данные успешно обновлены!"
        })
    },
    onError: ()=>{
        toast({
            title: "Данные не валидны ):"
        })
    },
  })
}
