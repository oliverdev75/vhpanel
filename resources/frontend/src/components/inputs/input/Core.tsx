import type { EventHandler } from "react"

interface Props {
    value: any,
    name?: string,
    type: string,
    id?: string,
    className?: string,
    tabIndex?: number,
    placeholder?: string,
    onChange?: EventHandler<any>
}

function Core ({ value, name, type = "string", placeholder, id, className = '', tabIndex, onChange }: Props) {
    return (
        <input
            type={type}
            tabIndex={tabIndex}
            value={value}
            id={id}
            name={name}
            {...(placeholder && { placeholder })}
            className={`px-3 py-1 rounded-lg border border-gray-300 focus:outline-[#0394e2]${className ? ` ${className}` : ''}`}
            onChange={onChange}
        />
    )
}

export default Core