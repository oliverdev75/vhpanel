
interface Props {
    className: string | null,
    children: string
}

function Icon ({ className, children }: Props) {
    return <i className={`material-symbols-rounded ${className}`}>{children}</i>
}

export default Icon