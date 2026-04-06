

export interface SelectOption {
    name: string,
    value: string
}

export interface NavLinkProps {
    route: string,
    name: string,
    icon: string,
}

export interface UserCredentials {
    email: string,
    password: string,
    remember_me: boolean
}

interface Model {
    id: number,
    created_at: string,
    updated_at: string
}

export interface User extends Model {
    email: string,
    fullname: string,
    role: object,
    last_logon: string,
}

type ServerStatus = 0 | 1
type OSSystem = 'linux' | 'windows'
type OSType = 'os' | 'application'

export interface Server extends Model {
    kvm_id: string,
    active_user_id: number,
    os_version_id: number,
    name: string,
    description?: string,
    cores: number,
    memory: number,
    mac?: string,
    ip: string,
    installed: boolean,
    status: ServerStatus,
    active_user: User,
    os_version: OSVersion,
    disks: Disk[]
}

export interface Disk extends Model {
    name: string,
    pivot: ServerDiskPivot,
    size: number
}

export interface ServerDiskPivot extends Model {
    server_id: number,
    disk_id: number,
    main: boolean    
}

export interface OSVersion extends Model {
    os_id: number,
    os: OS,
    version: string,
    stable: boolean,
    tls: boolean,
    codename: string,
}

export interface OS extends Model {
    active_user_id: number,
    shortname: string,
    name: string,
    system: OSSystem,
    type: OSType
}