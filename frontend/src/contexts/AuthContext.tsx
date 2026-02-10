import { createContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import type { UserData } from "../types"
import { objectLength } from "@/modules/core/lib/utils"

interface AuthContextValue {
    user: UserData | object,
    setUser: (data: UserData | object) => void,
    loggedIn: () => boolean | undefined
}

export const AuthContext = createContext<AuthContextValue>({
    user: {
        email: '',
        fullname: '',
        role: {},
        last_logon: '',
        created_at: '',
        updated_at: '',
    },
    setUser: () => {},
    loggedIn: () => false
})

interface Props {
    children: ReactNode
}

function AuthProvider ({ children }: Props) {
    const [user, setUser] = useState<UserData | object>({})
    const [loading, setLoading] = useState(true)

    const loggedIn = () => user && objectLength(user) > 0

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