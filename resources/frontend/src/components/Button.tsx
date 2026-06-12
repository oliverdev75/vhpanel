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
    disabled?: boolean,
    children?: ReactNode,
    onClick?: EventHandler<any>,
    onDoubleClick?: EventHandler<any>,
}

function Button ({ variant = 'primary', text = false, icon, iconPos, iconClass = '', disabled = false, type, className, full = false, onClick, onDoubleClick, children }: Props) {

    const hasLeftIcon = () => icon && (!iconPos || iconPos === 'left') && <Icon className={iconClass}>{icon}</Icon>
    const hasRightIcon = () => icon && iconPos === 'right' && <Icon className={iconClass}>{icon}</Icon>

    const classBase = `font-bold px-6 py-1.5 rounded-lg flex justify-center gap-2 ${!full && 'w-fit'} hover:cursor-pointer ${className ? ` ${className}` : ''}`
    const styles = {
        primary: `${classBase} text-white bg-site hover:bg-btn-primary-hover active:bg-btn-primary-active ${className ? ` ${className}` : ''}`,
        secondary: `${classBase} text-white bg-btn-secondary hover:bg-btn-secondary-hover active:bg-btn-secondary-active`,
        danger: `${classBase} text-white bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active`
    }

    if (text) {
        return (
            <button
                type={type || undefined}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                className={`h-fit flex justify-center items-center ${disabled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer' }${icon ? ' p-2 rounded-full hover:bg-gray-100' : ''}${className ? ` ${className}` : ''}`}
                disabled={disabled}
            >
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
            className={styles[variant]}
            disabled={disabled}
        >
            {hasLeftIcon()}
            <span>{children || ''}</span>
            {hasRightIcon()}
        </button>
    )
}

export default Button