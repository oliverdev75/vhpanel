import type { EventHandler, ReactNode } from "react"
import Core from "./Core"

interface Props {
    value: any,
    name?: string,
    type: string,
    id?: string,
    className?: string,
    tabIndex?: number,
    placeholder?: string,
    label?: ReactNode,
    onChange?: EventHandler<any>
}

function Input ({ value, name, type = "string", placeholder, label, id, tabIndex, onChange }: Props) {
    return label ? (
        <div className="flex items-center gap-3">
            <label htmlFor={id}>{label}</label>
            <Core
                type={type}
                tabIndex={tabIndex}
                value={value}
                id={id}
                name={name}
                {...(placeholder && { placeholder })}
                onChange={onChange}
            />
        </div>
    ) : (
        <Core
            type={type}
            tabIndex={tabIndex}
            value={value}
            id={id}
            name={name}
            {...(placeholder && { placeholder })}
            onChange={onChange}
        />
    )
}

export default Input