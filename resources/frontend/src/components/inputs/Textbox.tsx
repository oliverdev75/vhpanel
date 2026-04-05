import type { ChangeEvent } from "react"


interface Props {
    value: string,
    name?: string,
    id?: string,
    className?: string,
    placeholder?: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    children?: string,
}

function Textbox ({ value, name, id, className, placeholder, onChange, children }: Props) {
    return (
        <>
            <textarea
                value={value}
                name={name || ''}
                id={id || ''}
                placeholder={placeholder}
                className={`px-3 py-1 rounded-lg border border-gray-300 focus:outline-[#0394e2]${className ? ` ${className}` : ''}`}
                onChange={onChange}
            >
                {children}
            </textarea>
        </>
    )
}

export default Textbox