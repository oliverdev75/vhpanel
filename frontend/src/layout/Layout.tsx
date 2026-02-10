import { Outlet, useLocation, useNavigate } from "react-router"
import Navbar from "./Navbar"
import useAuth from "@/hooks/useAuth"
import { useEffect } from "react"

function Layout () {
    const { user, loggedIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        console.log(user)

        if (!loggedIn()) {
            navigate('/login')
        }

        console.log(location.pathname)
    }, [user])

    return (
        <>
            <div className="flex">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout