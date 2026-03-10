import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import type { User } from "../types"
import { objectLength } from "@/lib/utils"

interface AuthContextValue {
    user: User,
    setUser: (data: User) => void,
    loggedIn: () => boolean | undefined
}

export const userDataTemplate = {
    id: 0,
    email: '',
    fullname: '',
    role: {},
    last_logon: '',
    created_at: '',
    updated_at: '',
}

export const AuthContext = createContext<AuthContextValue>({
    user: userDataTemplate,
    setUser: () => {},
    loggedIn: () => false
})

interface Props {
    children: ReactNode
}

function AuthProvider ({ children }: Props) {
    const [user, setUser] = useState<User>(userDataTemplate)
    const [loading, setLoading] = useState(true)

    const loggedIn = () => user && user.id > 0

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user') || '{}')
        if (objectLength(savedUser)) {
            console.log('User found:', savedUser)
            setUser(savedUser)
        } else {
            console.log("To login...")
        }
        setLoading(false)
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider