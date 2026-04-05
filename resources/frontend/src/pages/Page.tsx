import type { ReactNode } from "react"

interface Props {
    title: string,
    subtitle?: string,
    children: ReactNode
}

function Page ({ title, subtitle, children }: Props) {
    return (
        <div className="w-full px-10 py-20 flex flex-col gap-2">
            <h2 className="text-4xl font-bold mb-7">{title}</h2>
            {subtitle && <span className="text-lg text-subtitle font-bold">{subtitle}</span>}
            {children}
        </div>
    )
}

export default Page