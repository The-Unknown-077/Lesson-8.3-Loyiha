import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const userKey = "userKey"

export const useAuth = () => {
    const getUsers = () => useQuery<any, any>({
        queryKey: [userKey],
        queryFn: () => api.get("user").then(res => res.data)
    })

    const signIn = useMutation<any, any, { email: string, password: string }>({
        mutationFn: (body: { email: string, password: string }) => api.post("auth/signin", body).then(res => res.data),
    })

    return { signIn, getUsers }
}