import useAuth from "@/hooks/useAuth"
import Icon from "./Icon"

function Profile () {
    const { user } = useAuth()

    return (
        <div className="w-full px-2 py-2 inline-flex items-center gap-3 rounded-lg text-white">
            <Icon className="!text-3xl">person</Icon>
            <span className="text-lg">{user.fullname}</span>
        </div>
    )
}

export default Profile