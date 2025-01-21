import { useQuery } from "@tanstack/react-query"
import { type GetUserFilters, getUsers } from "@/api/user"

export const useUsers = (filters?: GetUserFilters) => {
  return useQuery({
    queryKey: ["users", filters],
    queryFn: () => getUsers(filters)
  })
}
