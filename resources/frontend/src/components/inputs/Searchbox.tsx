import type { ChangeEvent } from "react"
import Icon from "../Icon"

interface Props {
    value: string,
    placeholder?: string,
    full?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Searchbox ({ value, placeholder, full = false, onChange }: Props) {

    return (
        <div className={`${full ? 'w-full' : 'w-fit'} h-fit flex gap-2 px-2 py-1 border border-neutral-300 rounded-lg`}>
            <Icon className="text-neutral-400">search</Icon>
            <input
                className={`focus:outline-0${full && ' w-full'}`}
                type="text"
                value={value}
                placeholder={placeholder || undefined}
                onChange={onChange}
            />
        </div>
    )
}

export default Searchbox