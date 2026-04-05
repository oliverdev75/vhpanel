import { useState } from "react"
import Button from "../Button"
import Modal from "./Modal"
import useServers from "@/hooks/useServers"
import type { Server } from "@/types"
import Icon from "../Icon"

interface Props {
    visible: boolean,
    server: Server | undefined,
    closeCallback: () => void
}

function DeleteServerModal ({ visible, server, closeCallback }: Props) {
    const [isAlert, setIsAlert] = useState(true)
    const { destroy } = useServers()

    const handleDelete = () => {
        server && destroy(server.id)
        setIsAlert(true)
        closeCallback()
    }

    const handleCancel = () => {
        setIsAlert(true)
        closeCallback()
    }

    const DeleteButton = () => isAlert
        ?
            <Button variant="danger" onClick={() => setIsAlert(false)}>Delete</Button>
        :
            <Button variant="danger" onClick={handleDelete}>Yes, delete</Button>

    const title = () => isAlert
        ?
            <>Delete server: <span className="font-semibold">{server?.name}</span> ?</>
        :
            <>Are you sure you want to delete the server: <span className="font-semibold">{server?.name}</span> ?</>
    
    const Advice = () => isAlert || (
        <div className="px-4 py-3 bg-red-100 text-red-500 rounded-lg flex items-center gap-4">
            <Icon>error</Icon>
            <p>This action is permanent and the server will not be able to be recovered.</p>
        </div>
    )

    return (
        <>
            <Modal
                visible={visible}
                closeCallback={closeCallback}
                title={title()}
            >
                <Advice />
                <div className="mt-4 flex gap-3 justify-end">
                    <Button onClick={handleCancel} variant="secondary">Cancel</Button>
                    <DeleteButton />
                </div>
            </Modal>
        </>
    )
}

export default DeleteServerModal