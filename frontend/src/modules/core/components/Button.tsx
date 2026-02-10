import type { EventHandler, ReactNode } from "react"
import Icon from "@/modules/core/components/Icon"

interface Props {
    text?: boolean,
    className?: string,
    type?: "submit" | "reset" | "button" | undefined,
    full?: boolean,
    icon?: string,
    iconPos?: 'left' | 'right',
    iconClass?: string,
    children?: ReactNode,
    onClick?: EventHandler<any>,
    onDoubleClick?: EventHandler<any>,
}

function Button ({ text = false, icon, iconPos, iconClass = '', type, className, full = false, onClick, onDoubleClick, children }: Props) {

    const hasLeftIcon = () => icon && (!iconPos || iconPos === 'left') && <Icon className={iconClass}>{icon}</Icon>
    const hasRightIcon = () => icon && iconPos === 'right' && <Icon className={iconClass}>{icon}</Icon>

    if (text) {
        return (
            <button type={type || undefined} onClick={onClick || undefined} onDoubleClick={onDoubleClick || undefined} className={`h-fit flex items-center hover:cursor-pointer ${className}`}>
                {hasLeftIcon()}
                {children && <span className="inline-flex items-center">{children}</span>}
                {hasRightIcon()}
            </button>
        )
    }

    return (
        <button
            type={type || undefined}
            onClick={onClick || undefined}
            onDoubleClick={onDoubleClick || undefined}
            className={`bg-site text-white font-bold px-6 py-1.5 rounded-lg flex justify-center gap-2 ${!full && 'w-fit'} hover:cursor-pointer hover:bg-btn-hover active:bg-btn-active ${className}`}
        >
            {hasLeftIcon()}
            <span>{children || ''}</span>
            {hasRightIcon()}
        </button>
    )
}

export default Button