
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

export interface User {
    id: number,
    email: string,
    fullname: string,
    role: object,
    last_logon: string,
    created_at: string,
    updated_at: string,
}

export interface Server {
    id: number,
    active_user_id: number,
    os_version_id: number,
    name: string,
    description?: string,
    cores: number,
    memory: number,
    mac?: string,
    ip: string,
    installed: boolean,
    status: number,
    created_at: string,
    updated_at: string,
    active_user: User,
    os_version: object,
    disks: object[]
}