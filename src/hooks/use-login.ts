import { useMutation } from "@tanstack/react-query"
import { toast } from "./use-toast"
import { login } from "@/api/auth"

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: user => {
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name}!`
      })
    },
    onError: error => {
      toast({
        title: "Login Failed",
        description: error.message
      })
    }
  })
}
