import Icon from "@/components/Icon"

interface Props {
    status: 0 | 1,
    onClick: () => void
}

function ChangeStatusButton ({ status, onClick }: Props) {
    return (
        <button onClick={onClick} className={`px-3 py-1 flex items-center gap-2 rounded-lg ${status ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'}  text-white hover:cursor-pointer`}>
            <Icon>{status ? 'stop_arrow' : 'start_arrow'}</Icon>
            <span className="text-lg font-bold">{status ? 'Stop' : 'Start'}</span>
        </button>
    )
}

export default ChangeStatusButton