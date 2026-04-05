import Icon from "@/components/Icon"
import { NavLink, useLocation } from "react-router"

interface Props {
    route?: string,
    action?: () => void
    name: string,
    icon: string,
    full: boolean
}

function AppLink ({ route, action, name, icon, full }: Props) {

    const isActive = useLocation().pathname === route

    const makeIconClassName = (isActive ? 'text-site' : 'text-white') + '!text-3xl'
    const makeTextClassName = (isActive ? 'text-site' : 'text-white') + 'text-lg font-bold'

    if (route) {
        return (
            <NavLink
                className={`w-full px-3 py-2 inline-flex items-center gap-3 rounded-lg ${isActive ? 'bg-white text-site' : 'text-white hover:bg-[#028cd7]' }`}
                to={route}
            >
                <Icon className={makeIconClassName}>{icon}</Icon>
                {full && <span className={makeTextClassName}>{name}</span>}
            </NavLink>
        )
    }

    return (
        <button
            onClick={action}
            className={`w-full px-3 py-2 inline-flex ${!full && 'justify-center'} items-center gap-3 rounded-lg text-white hover:bg-[#028cd7] hover:cursor-pointer`}
        >
            <Icon className={makeIconClassName}>{icon}</Icon>
            {full && <span className={makeTextClassName}>{name}</span>}
        </button>
    )
}

export default AppLink