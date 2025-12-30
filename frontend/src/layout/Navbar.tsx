import Button from "@/components/Button"
import AppLink from "@/components/nav/AppLink"
import type { NavLinkProps } from "../types"

function Navbar () {

    const appLinks: NavLinkProps[] = [
        {
            route: "/",
            name: "Servers",
            icon: "storage"
        }
    ]

    const userLinks: NavLinkProps[] = [
        {
            route: "/settings",
            name: "Settings",
            icon: "settings"
        }
    ]

    return (
        <>
            <div className="bg-site w-fit h-screen px-5 py-5">
                <div className="h-full flex flex-col gap-10">
                    <div className="flex gap-10">
                        <h1 className="inline-flex items-center gap-2">
                            <img src="/img/logo_horizontal_white.png" alt="VirtualHost logo" width="170" />
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
                        <ul className="flex flex-col gap-2">
                            {
                                userLinks.map((link, index) => (
                                    <li key={index}>
                                        <AppLink {...link} />
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar