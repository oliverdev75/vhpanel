import { useState } from "react"
import Button from "@/components/Button"
import Icon from "@/components/Icon"


interface Props {
    name: string,
    visibility: boolean,
    placeholder: string | null
}

function InputPassword ({ name, visibility = false, placeholder = null }: Props) {
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
                name={name}
                {...(placeholder && { placeholder: placeholder })}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="focus:outline-none"
            />
            {
                visibility && (
                    <Button onClick={handleEyeClick} text>
                        <Icon className="!text-[1.4rem] text-[#969696]">{visibilityIcon}</Icon>
                    </Button>
                )
            }
        </div>
    )
}

export default InputPassword