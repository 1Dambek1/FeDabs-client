import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { ApiResponseError } from "@/types/error"
import { title } from "@/lib/utils"
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
    onError: (error: AxiosError<ApiResponseError>) => {
      console.log(error)
      toast({
        title: "Login Failed",
        description: error?.response
          ? title(error.response.data.detail.data) + "."
          : "An error occured trying to login"
      })
    }
  })
}
