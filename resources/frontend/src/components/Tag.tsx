import type { ReactNode } from "react"


interface Props {
    className?: string,
    children: ReactNode
}

function Tag ({ className, children }: Props) {
    return (
        <div className={`size-fit px-1 py-1 rounded-md ${className}`}>{children}</div>
    )
}

export default Tag