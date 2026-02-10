
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

export interface UserData {
    email: string,
    fullname: string,
    role: object,
    last_logon: string,
    created_at: string,
    updated_at: string,
}