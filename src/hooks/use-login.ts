import { useMutation } from "@tanstack/react-query"
import { useRouter } from "@tanstack/react-router"
import { AxiosError } from "axios"
import { ApiResponseError } from "@/types/error"
import { title } from "@/lib/utils"
import { toast } from "./use-toast"
import { login } from "@/api/auth"

export function useLogin() {
  const router = useRouter()

  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: user => {
      router.navigate("/profile")

      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name}!`
      })
    },
    onError: (error: AxiosError<ApiResponseError>) => {
      toast({
        title: "Login Failed",
        description: error?.response
          ? title(error.response.data.detail.data) + "."
          : "An error occured trying to login"
      })
    }
  })
}
