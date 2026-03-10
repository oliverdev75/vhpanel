import * as OS from "./OSIcons"

interface Props {
    className?: string,
    children: string
}

function Icon ({ className, children }: Props) {
    switch (children) {
        case 'debian':
            return <OS.Debian />
        case 'ubuntu':
            return <OS.Ubuntu />
        case 'alpine':
            return <OS.Alpine />
        case 'rhel':
            return <OS.RHEL />
        case 'suse':
            return <OS.Suse />
        case 'centos':
            return <OS.Centos />
        case 'alma':
            return <OS.Alma />
        case 'rocky':
            return <OS.Rocky />
    }

    return <i className={`material-symbols-rounded ${className || ''}`}>{children}</i>
}

export default Icon