import { type EventHandler } from "react"
import Core from "./Core"

interface Props {
    value: any,
    name?: string,
    tabIndex?: number,
    visibility: boolean,
    label?: string,
    placeholder?: string,
    id?: string,
    className?: string,
    onChange?: EventHandler<any>,
}

function InputPassword({
    value,
    name,
    visibility = false,
    label,
    placeholder,
    tabIndex,
    id,
    className = "",
    onChange,
}: Props) {

    return label ? (
        <div className={`flex items-center gap-3${className || ''}`}>
            <label htmlFor={id}>{label}</label>
            <Core
                value={value}
                name={name}
                tabIndex={tabIndex}
                id={id}
                {...(placeholder && { placeholder: placeholder })}
                onChange={onChange}
                visibility={visibility}
            />
        </div>
    ) : (
        <Core
            value={value}
            name={name}
            tabIndex={tabIndex}
            id={id}
            {...(placeholder && { placeholder: placeholder })}
            onChange={onChange}
            visibility={visibility}
            className={className}
        />
    )
}

export default InputPassword