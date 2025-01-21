import { useQuery } from "@tanstack/react-query"
import { fetchCurrentUser } from "@/api/auth"
import { User } from "@/types/user"

export function useUser() {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchCurrentUser
  })
}
