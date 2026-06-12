import type { ChangeEvent, EventHandler } from "react"

interface Props {
    value: any,
    name?: string,
    type: string,
    id?: string,
    className?: string,
    tabIndex?: number,
    placeholder?: string,
    onChange: (value: any) => void
}

function Core ({ value, name, type = "text", placeholder, id, className = '', tabIndex, onChange }: Props) {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }
    
    return (
        <input
            type={type}
            tabIndex={tabIndex}
            value={value}
            id={id}
            name={name}
            {...(placeholder && { placeholder })}
            className={`px-3 py-1 rounded-lg border border-gray-300 focus:outline-input-focus-outline ${className ? ` ${className}` : ''}`}
            onChange={handleChange}
        />
    )
}

export default Core