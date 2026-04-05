import type { ReactNode } from "react"
import { NavLink } from "react-router"
import Button from "./Button"

interface Props {
    className?: string,
    type?: 'button' | 'link'
    children: ReactNode,
    to: string,
    external?: boolean,
}

function Link ({ className, type = 'link', children, to, external = false }: Props) {
    const attribs = { to: to, target: '_self' }

    if (external) {
        attribs.target = '_blank'
    }

    if (type === 'button') {
        return (
            <NavLink {...attribs} className={`text-link font-semibold hover:cursor-pointer${className ? ` ${className}` : ''}`}>
                <Button>
                    {children}
                </Button>
            </NavLink>
        )
    }

    return <NavLink {...attribs} className={`text-link font-semibold hover:cursor-pointer${className ? ` ${className}` : ''}`}>{children}</NavLink>
}

export default Link