import type { ReactNode } from "react"

interface Props {
    children: ReactNode
    link: string,
    external: boolean
}

function Link ({ children, link, external = false }: Props) {
    const attribs = { href: link }

    if (external) {
        attribs.target = '_blank'
    }

    return <a {...attribs} className="text-link">{children}</a>
}

export default Link