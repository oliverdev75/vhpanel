

interface Props {
    name: string,
    type: string,
    placeholder: string | null
}

function Input ({ name, type = "string", placeholder = null }: Props) {
    return <input type={type} name={name} className="px-5 py-4 rounded border" />
}

export default Input