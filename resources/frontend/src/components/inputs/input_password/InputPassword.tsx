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
    onChange: (value: any) => void,
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
        <div className={`flex items-center gap-3`}>
            <label htmlFor={id}>{label}:</label>
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