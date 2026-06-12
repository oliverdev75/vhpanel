import { userDataTemplate } from "@/contexts/AuthContext"
import useAuth from "./useAuth"
import { get, post } from "@/services/api"
import type { UserCredentials } from "@/types"
import { useNavigate } from "react-router"


const useAuthActions = () => {
    const { setUser } = useAuth()
    const navigate = useNavigate()

    const login = async (credentials: UserCredentials, errorCallback: () => void) => {
        let res
        try {
            res = await post('/login', credentials)
        } catch {
            errorCallback()
        }
        console.log(res?.data)
        localStorage.setItem('token', res?.data.token)

        const user = await get('/auth/me')
        console.log(user)

        localStorage.setItem('user', JSON.stringify(user.data.data))
        setUser(user.data.data)
        navigate('/servers')
    }
    
    const logout = async () => {
        await get('/logout')
        setUser(userDataTemplate)
        localStorage.removeItem('user')
        navigate('/login')
    }

    return {
        login,
        logout
    }
}

export default useAuthActions