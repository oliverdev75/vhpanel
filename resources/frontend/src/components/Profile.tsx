import useAuth from "@/hooks/auth/useAuth"
import Icon from "./Icon"

interface Props {
    full: boolean
}

function Profile ({ full }: Props) {
    const { user } = useAuth()

    const show = () => {
        if (full) {
            return (
                <>
                    <Icon className="!text-3xl">person</Icon>
                    <span className="text-lg">{user.fullname}</span>
                </>
            )
        }

        return <span className="inline-block w-full text-center text-xl">{user.fullname.slice(0, 1)}</span>
    }

    return (
        <div className="w-full px-2 py-2 inline-flex items-center gap-3 rounded-lg text-white">
            {show()}
        </div>
    )
}

export default Profile