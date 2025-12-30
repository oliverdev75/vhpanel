import Icon from "@/components/Icon"
import { NavLink, useLocation } from "react-router"

interface Props {
    route: string,
    name: string,
    icon: string
}

function AppLink ({ route, name, icon }: Props) {

    const active = route === useLocation().pathname 

    return (
        <NavLink
            className={`w-full px-3 py-1 inline-flex items-center gap-3 rounded-lg ${active ? 'bg-white text-site' : 'text-white hover:bg-[#028cd7]' }`}
            to={route}
        >
            <Icon className={`!text-3xl ${active ? 'text-site' : 'text-white' }`}>{icon}</Icon>
            <span className={`text-lg font-bold ${active ? 'text-site' : 'text-white'}`}>{name}</span>
        </NavLink>
    )
}

export default AppLink