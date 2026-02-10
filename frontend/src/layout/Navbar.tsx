import Button from "@/modules/core/components/Button"
import AppLink from "@/modules/core/nav/components/AppLink"
import Profile from "@/modules/core/components/Profile"
import type { NavLinkProps } from "../types"
import useAuthActions from "@/hooks/useAuthActions"

function Navbar () {
    const { logout } = useAuthActions()

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

    return (
        <>
            <div className="bg-site w-fit h-screen px-4 py-5">
                <div className="h-full flex flex-col gap-10">
                    <div className="flex gap-10">
                        <h1 className="inline-flex items-center gap-2">
                            <img src="/img/logo_horizontal_white.png" alt="VirtualHost logo" width="140" />
                            <span className="text-2xl text-white font-bold italic">Panel</span>
                        </h1>
                        <Button icon="menu_open" iconClass="text-white !text-4xl" text />
                    </div>
                    <nav className="h-full flex flex-col justify-between">
                        <ul className="flex flex-col gap-2">
                            {
                                appLinks.map((link, index) => (
                                    <li key={index}>
                                        <AppLink {...link} />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col gap-2">
                            <ul className="flex flex-col gap-2">
                                {
                                    userLinks.map((link, index) => (
                                        <li key={index}>
                                            <AppLink {...link} />
                                        </li>
                                    ))
                                }
                            </ul>
                            <Profile />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar