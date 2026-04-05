import { useState } from "react"
import Icon from "../Icon"
import type { SelectOption } from "@/types"

interface Props {
    value: string,
    options: SelectOption[],
    id?: string,
    className?: string,
    full?: boolean,
    onChange: (v: any) => void
}


function Select ({ value, options, className, full = false, onChange }: Props) {
    const [isClosed, setIsClosed] = useState(true)

    const makeSelectOptions = () => (
        options.map(option => (
            <li role="button" className="pl-3 pr-2 py-2 hover:cursor-pointer hover:bg-neutral-100" onClick={() => handleOptionClick(option.value)}>
                <span className="flex items-center gap-2">{option.name}</span>
            </li>
        ))
    )

    const showOptions = () => !isClosed && ( 
        <div className={`z-20 absolute top-14 w-full scroll-auto ${isClosed ? 'hidden' : ''} bg-white`}>
            <ul className="w-full h-fit list-none rounded-lg shadow-lg first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg">
                {makeSelectOptions()}
            </ul>
        </div>
    )

    const handleSelectClick = () => {
        setIsClosed(!isClosed)
    }

    const handleOptionClick = (value: string) => {
        setIsClosed(true)
        onChange(value)
    }

    return (
        <>
            <div className="absolute top-0 left-0 size-screen z-10" onClick={() => setIsClosed(true)} />
            <div className={`${full ? 'w-full' : 'w-fit'} relative`}>
                <button type="button" onClick={handleSelectClick} className={`${full ? 'w-full' : 'w-fit'} h-fit pl-3 pr-2 py-2 border border-neutral-300 rounded-lg flex items-center ${full ? 'justify-between' : 'gap-2'} hover:cursor-pointer${className ? ` ${className}` : ''}`}>
                    <span className="flex items-center gap-2">{options.find(option => option.value === value)?.name || 'Value'}</span>
                    <Icon className="!text-2xl text-neutral-400">keyboard_arrow_down</Icon>
                </button>
                {showOptions()}
            </div>
        </>
    )
}

export default Select