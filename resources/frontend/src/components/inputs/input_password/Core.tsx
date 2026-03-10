import Button from "@/components/Button"
import Icon from "@/components/Icon"
import { useState, type EventHandler } from "react"


interface Props {
    value: any,
    name?: string,
    tabIndex?: number,
    visibility: boolean,
    placeholder?: string,
    id?: string,
    className?: string,
    onChange?: EventHandler<any>,
}

function Core ({ value, name, visibility = false, placeholder, tabIndex, id, className = '', onChange }: Props) {
    const [style, setStyle] = useState<object>()
    const [type, setType] = useState("password")
    const [visibilityIcon, setVisibilityIcon] = useState("visibility")

    const handleFocus = () => {
        setStyle({ outline: '2px solid #0394e2' })
    }

    const handleBlur = () => {
        setStyle({})
    }

    const handleEyeClick = () => {
        if (type === "password") {
            setVisibilityIcon("visibility_off")
            setType("text")
        } else {
            setVisibilityIcon("visibility")
            setType("password")
        }
    }
    
    return (
        <div style={style} className={`px-3 py-1 rounded-lg border border-gray-300 flex items-center${' ' + className}`}>
            <input
                type={type}
                tabIndex={tabIndex}
                value={value}
                name={name}
                id={id}
                {...(placeholder && { placeholder: placeholder })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange}
                className="focus:outline-none"
            />
            {
                visibility && (
                    <Button onClick={handleEyeClick} text>
                        <Icon className="!text-[1.2rem] text-[#969696]">{visibilityIcon}</Icon>
                    </Button>
                )
            }
        </div>
    )
}

export default Core