import useAuth from "../hooks/useAuth"
import Button from "@/modules/core/components/Button"

function Servers () {
    const { user } = useAuth()

    return (
        <>
            <div className="w-full px-10 py-20">
                <h2 className="text-4xl font-bold mb-3">Servers</h2>
                <span className="text-lg text-subtitle font-bold">List of servers</span>
                <div className="flex justify-end gap-4">
                    <Button icon="add">Create</Button>
                </div>
                <SearchBox />
            </div>
        </>
    )
}

export default Servers