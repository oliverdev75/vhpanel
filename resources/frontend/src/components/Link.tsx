import type { ReactNode } from "react"
import { NavLink } from "react-router"

interface Props {
    className?: string,
    children: ReactNode,
    to: string,
    external?: boolean
}

function Link ({ className, children, to, external = false }: Props) {
    const attribs = { to: to, target: '_self' }

    if (external) {
        attribs.target = '_blank'
    }

    return <NavLink {...attribs} className={`text-link font-semibold hover:cursor-pointer ${className && className}`}>{children}</NavLink>
}

export default Link