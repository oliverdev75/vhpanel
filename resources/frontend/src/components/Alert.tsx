import type { ReactNode } from "react"
import Icon from "./Icon"

interface Props {
    severity: 'success' | 'warning' | 'danger',
    icon?: string,
    children: ReactNode
}

function Alert ({ severity, icon, children}: Props) {

    const showIcon = () => {
        switch (severity) {
            case 'success':
                return 'check'
            case 'warning':
                return 'warning'
            case 'danger':
                return 'error'
        }

        return null
    }

    return (
        <>
            <div className="px-4 py-3 bg-red-100 text-red-500 rounded-lg flex items-center gap-4">
                <Icon>{showIcon() || icon}</Icon>
                <p>{children}</p>
            </div>
        </>
    )
}

export default Alert