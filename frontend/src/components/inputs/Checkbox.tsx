import { useCallback, useEffect, useState } from "react"
import Icon from "@/components/Icon"

interface Props {
    name: string,
    label: string,
    id: string,
    labelClass: string
}

function Checkbox ({ name, label, id, labelClass }: Props) {
    const [checkState, setCheckState] = useState(false)
    const handleChange = () => {
        setCheckState(!checkState)
    }

    return (
        <>
            <div className="flex items-center gap-2">
                <div className="relative w-fit">                
                    <input type="checkbox" id={id} name={name} onChange={handleChange} className="opacity-0 size-5 z-99 absolute top-0 left-0 hover:cursor-pointer" />
                    <button
                        role="checkbox"
                        className={`size-5 border-2 ${checkState ? 'border-site' : 'border-gray-300'} rounded ${checkState && 'bg-site'} flex justify-center items-center hover:cursor-pointer`}
                    >
                        {checkState && <Icon className="!text-[1.4rem] text-white">check</Icon>}
                    </button>
                </div>
                <label htmlFor={id} className={labelClass}>{label}</label>
            </div>
        </>
    )
}

export default Checkbox