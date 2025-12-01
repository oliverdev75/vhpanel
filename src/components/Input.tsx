

interface Props {
    name: string,
    type: string,
    placeholder: string | null
}

function Input ({ name, type = "string", placeholder = null }: Props) {
    return (
        <input
            type={type}
            name={name}
            {...(placeholder && { placeholder: placeholder })}
            className="px-3 py-1 rounded-lg border border-gray-500"
        />
    )
}

export default Input