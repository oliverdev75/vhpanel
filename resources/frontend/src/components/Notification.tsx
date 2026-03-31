import Alert from "./Alert"

interface Props {
    visible: boolean
}

function Notification ({ visible, severity, icon, children }: Props) {
    return visible && (
        <div className="absolute top-0 left-0 w-full px-20 z-50">
            <Alert severity="success" icon="check">Alert</Alert>
        </div>
    )
}

export default Notification