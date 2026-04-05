import type { EventHandler, ReactNode } from "react"
import Core from "./Core"

interface Props {
    value: any,
    name?: string,
    type: string,
    id?: string,
    full?: boolean,
    tabIndex?: number,
    placeholder?: string,
    label?: ReactNode,
    onChange?: EventHandler<any>
}

function Input ({ value, name, type = "string", placeholder, label, id, tabIndex, full = false, onChange }: Props) {
    return label ? (
        <div className={`flex items-center gap-3${full && ' w-full'}`}>
            <label htmlFor={id}>{label}:</label>
            <Core
                type={type}
                tabIndex={tabIndex}
                className={full ? 'w-full' : ''}
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
            className={full ? 'w-full' : ''}
            value={value}
            id={id}
            name={name}
            {...(placeholder && { placeholder })}
            onChange={onChange}
        />
    )
}

export default Input