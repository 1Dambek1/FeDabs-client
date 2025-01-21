import { useMutation } from "@tanstack/react-query"
import { createDepartment } from "@/api/department"

export function useCreateDepartment() {
  return useMutation({
    mutationFn: createDepartment
  })
}
