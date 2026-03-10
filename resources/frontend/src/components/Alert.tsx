
interface Props {
    visible: boolean
}

function Alert ({ visible }: Props) {
    return visible && (
        <div className="absolute top-0 left-0 w-full px-20 z-50">
            <div className="">
                
            </div>
        </div>
    )
}

export default Alert