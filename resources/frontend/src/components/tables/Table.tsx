import { useEffect, type ReactNode } from "react"


interface Props {
    className?: string,
    children: ReactNode
}

function Table ({ className, children }: Props) {

    useEffect(() => {
        console.log(children)
    }, [])

    return (
        <div className="px-4 py-3 border border-neutral-300 rounded-lg">
            <table className={className}>
                {children}
            </table>
        </div>
    )
}

export default Table