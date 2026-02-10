import { useState, type EventHandler } from "react"
import Button from "@/modules/core/components/Button"
import Icon from "@/modules/core/components/Icon"


interface Props {
    value: any,
    name?: string,
    tabIndex?: number,
    visibility: boolean,
    placeholder: string | null,
    onChange?: EventHandler<any>
}

function InputPassword ({ value, name, visibility = false, placeholder = null, tabIndex, onChange }: Props) {
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
        <div style={style} className="px-3 py-1 rounded-lg border border-gray-300 flex items-center">
            <input
                type={type}
                tabIndex={tabIndex || undefined}
                value={value}
                name={name || undefined}
                {...(placeholder && { placeholder: placeholder })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange || undefined}
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

export default InputPassword