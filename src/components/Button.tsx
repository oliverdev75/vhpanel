import type { EventHandler, ReactNode } from "react"
import Icon from "@/components/Icon"

interface Props {
    onClick: EventHandler<any>,
    onDoubleClick: EventHandler<any>,
    text: boolean,
    full: boolean,
    icon: string | null,
    iconPos: 'left' | 'right' | null,
    children: ReactNode | null,
}

function Button ({ onClick, onDoubleClick, text = false, icon, iconPos, full = false, children }: Props) {

    const hasLeftIcon = () => icon && (!iconPos || iconPos === 'left') && <Icon>{icon}</Icon>
    const hasRightIcon = () => icon && iconPos === 'right' && <Icon>{icon}</Icon>

    if (text) {
        return (
            <button onClick={onClick} onDoubleClick={onDoubleClick} className="h-fit flex items-center hover:cursor-pointer">
                {hasLeftIcon()}
                {children && <span className="inline-flex items-center">{children}</span>}
                {hasRightIcon()}
            </button>
        )
    }

    return (
        <button
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            className={`bg-site text-white font-bold px-6 py-1.5 rounded-lg flex justify-center gap-2 ${!full && 'w-fit'} hover:cursor-pointer hover:bg-btn-hover active:bg-btn-active`}
        >
            {hasLeftIcon()}
            <span>{children}</span>
            {hasRightIcon()}
        </button>
    )
}

export default Button