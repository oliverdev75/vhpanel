import { useEffect, type ReactNode } from "react"
import Alert from "./Alert"

interface Props {
    visible: boolean,
    severity: 'success' | 'warning' | 'danger',
    icon: string,
    children: ReactNode
}

function Notification ({ visible, severity, icon, children }: Props) {
    
    useEffect(() => console.log(severity, icon, children), [])

    return visible && (
        <div className="absolute top-0 left-0 w-full px-20 z-50">
            <Alert severity="success" icon="check">Alert</Alert>
        </div>
    )
}

export default Notification