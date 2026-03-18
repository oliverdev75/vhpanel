import Icon from "@/components/Icon"
import AppLink from "@/components/nav/AppLink"
import Profile from "@/components/Profile"
import type { NavLinkProps } from "../types"
import useAuthActions from "@/hooks/auth/useAuthActions"
import { useState } from "react"

function Navbar () {
    const { logout } = useAuthActions()
    const [isOpen, setIsOpen] = useState(true)

    const appLinks: NavLinkProps[] = [
        {
            name: "Servers",
            icon: "storage",
            route: "/servers",
        }
    ]

    const userLinks = [
        {
            name: "Settings",
            icon: "settings",
            route: "/settings",
        },
        {
            name: "Logout",
            icon: "logout",
            action: () => logout()
        }
    ]

    const showBigLogo = () => isOpen && (
        <h1 className="inline-flex items-center gap-2">
            <img src="/img/logo_horizontal_white.png" alt="VirtualHost logo" width="140" />
            <span className="text-2xl text-white font-bold italic">Panel</span>
        </h1>
    )

    return (
        <>
            <header className="bg-site w-fit min-h-full px-4 py-5">
                <div className="h-full flex flex-col gap-10">
                    <div className={`flex ${isOpen ? 'gap-10' : 'justify-center'}`}>
                        {showBigLogo()}
                        <button onClick={() => setIsOpen(!isOpen)} className="px-2 rounded-lg hover:cursor-pointer hover:bg-[#028cd7]">
                            <Icon className="text-white !text-4xl">{`${isOpen ? 'menu_open' : 'menu'}`}</Icon>
                        </button>
                    </div>
                    <nav className="h-full flex flex-col justify-between">
                        <ul className="flex flex-col gap-2">
                            {
                                appLinks.map((link, index) => (
                                    <li key={index}>
                                        <AppLink {...link} full={isOpen} />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col gap-2">
                            <ul className="flex flex-col gap-2">
                                {
                                    userLinks.map((link, index) => (
                                        <li key={index}>
                                            <AppLink {...link} full={isOpen} />
                                        </li>
                                    ))
                                }
                            </ul>
                            <Profile full={isOpen} />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar