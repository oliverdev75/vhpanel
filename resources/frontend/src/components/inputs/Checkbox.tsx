import type { ChangeEvent, EventHandler } from "react"
import Icon from "../Icon"

interface Props {
    value: boolean | undefined,
    name?: string,
    label: string,
    inputId: string,
    labelClass: string,
    tabIndex?: number,
    onChange: EventHandler<any>
}

function Checkbox ({ value, name, label, inputId, labelClass = '', tabIndex, onChange }: Props) {
    const handleChange = (e: ChangeEvent) => {
        onChange(e)
    }

    return (
        <>
            <div className="flex items-center gap-2">
                <div className="relative w-fit">                
                    <input tabIndex={tabIndex} checked={value} type="checkbox" id={inputId} name={name} onChange={handleChange} className="opacity-0 size-5 z-99 absolute top-0 left-0 hover:cursor-pointer" />
                    <button
                        role="checkbox"
                        className={`size-5 border-2 ${value ? 'border-site' : 'border-gray-300'} rounded ${value && 'bg-site'} flex justify-center items-center hover:cursor-pointer`}
                    >
                        {value && <Icon className="!text-[1.4rem] text-white">check</Icon>}
                    </button>
                </div>
                <label htmlFor={inputId} className={labelClass}>{label}</label>
            </div>
        </>
    )
}

export default Checkbox