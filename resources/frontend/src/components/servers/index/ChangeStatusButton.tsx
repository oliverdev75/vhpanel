import Icon from "@/components/Icon"
import type { ServerStatus } from "@/types"

interface Props {
    status: 0 | 1 | 2,
    onClick?: () => void
}

function ChangeStatusButton ({ status, onClick }: Props) {

    const showIcon = () => {
        switch (status) {
            case 0:
                return 'play_arrow'
            case 1:
                return 'stop'
        }
        
        return 'progress_activity'
    }

    const getStyles = () => {
        switch (status) {
            case 0:
                return 'bg-green-600 hover:bg-green-700'
            case 1:
                return 'bg-red-500 hover:bg-red-600'
        }
        
        return 'bg-amber-300'
    }

    const showText = () => {
        switch (status) {
            case 0:
                return 'Start'
            case 1:
                return 'Stop'
        }
        
        return 'Starting...'
    }

    return (
        <button disabled={status === 2} onClick={onClick} className={`px-3 py-1 flex items-center gap-2 rounded-lg ${getStyles()} text-white ${status === 2 ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>
            <Icon className={status === 2 ? 'animate-spin' : ''}>{showIcon()}</Icon>
            <span className="text-lg font-bold">{showText()}</span>
        </button>
    )
}

export default ChangeStatusButton