import { useQuery } from "@tanstack/react-query"
import { fetchCurrentUser } from "@/api/auth"

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentUser
  })
}
