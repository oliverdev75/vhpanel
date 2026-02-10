import type { EventHandler } from "react"

interface Props {
    value: any,
    name?: string,
    type: string,
    tabIndex?: number,
    placeholder: string | null,
    onChange?: EventHandler<any>
}

function Input ({ value, name, type = "string", placeholder = null, tabIndex, onChange }: Props) {

    return (
        <input
            type={type}
            tabIndex={tabIndex || undefined}
            value={value}
            name={name || undefined}
            {...(placeholder && { placeholder: placeholder })}
            className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-[#0394e2]"
            onChange={onChange || undefined}
        />
    )
}

export default Input