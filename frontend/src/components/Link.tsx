import type { ReactNode } from "react"

interface Props {
    className: string,
    children: ReactNode,
    link: string,
    external: boolean
}

function Link ({ className, children, link, external = false }: Props) {
    const attribs = { href: link }

    if (external) {
        attribs.target = '_blank'
    }

    return <a {...attribs} className={`text-link font-semibold hover:cursor-pointer ${className && className}`}>{children}</a>
}

export default Link