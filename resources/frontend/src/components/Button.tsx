import type { EventHandler, ReactNode } from "react"
import Icon from "@/components/Icon"

interface Props {
    variant?: 'primary' | 'secondary' | 'danger'
    text?: boolean,
    className?: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    full?: boolean,
    icon?: string,
    iconPos?: 'left' | 'right',
    iconClass?: string,
    children?: ReactNode,
    onClick?: EventHandler<any>,
    onDoubleClick?: EventHandler<any>,
}

function Button ({ variant = 'primary', text = false, icon, iconPos, iconClass = '', type, className, full = false, onClick, onDoubleClick, children }: Props) {

    const hasLeftIcon = () => icon && (!iconPos || iconPos === 'left') && <Icon className={iconClass}>{icon}</Icon>
    const hasRightIcon = () => icon && iconPos === 'right' && <Icon className={iconClass}>{icon}</Icon>

    const styles = () => {
        const base = `font-bold px-6 py-1.5 rounded-lg flex justify-center gap-2 ${!full && 'w-fit'} hover:cursor-pointer ${className}`
        if (variant === 'primary') {
            return `${base} text-white bg-site hover:bg-btn-hover active:bg-btn-active ${className}`
        } else if (variant === 'danger') {
            return `${base} text-white bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active`
        } else {
            return `${base} text-white bg-btn-secondary hover:bg-btn-secondary-hover active:bg-btn-secondary-active`
        }
    }

    if (text) {
        return (
            <button type={type || undefined} onClick={onClick} onDoubleClick={onDoubleClick} className={`h-fit flex items-center hover:cursor-pointer${icon ? ' p-2 rounded-full hover:bg-gray-100' : ''}${className ? ` ${className}` : ''}`}>
                {hasLeftIcon()}
                {children && <span className="inline-flex items-center">{children}</span>}
                {hasRightIcon()}
            </button>
        )
    }

    return (
        <button
            type={type || undefined}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            className={styles()}
        >
            {hasLeftIcon()}
            <span>{children || ''}</span>
            {hasRightIcon()}
        </button>
    )
}

export default Button