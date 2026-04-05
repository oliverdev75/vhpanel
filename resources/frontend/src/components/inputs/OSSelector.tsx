

interface Props {
    name: string,
    image: string,
    value: string,
    changeOS: () => void
}

function OSSelector ({ name, image, value, changeOS }: Props) {

    return (
        <>
            <button
                type="button"
                className={`w-fit px-5 py-3 border-2 ${value === name ? 'border-sky-500 bg-os-selector-active' : 'border-gray-200'} rounded-xl flex flex-col items-center gap-3 transition-colors hover:cursor-pointer`}
                onClick={changeOS}
            >
                <img src={`/img/oses/${image}.webp`} alt={`${name} logo`} width={90} />
                <span className="text-lg">{name}</span>
            </button>
        </>
    )
}

export default OSSelector