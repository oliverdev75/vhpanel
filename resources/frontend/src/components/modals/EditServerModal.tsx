import type { FormEvent } from "react"
import Button from "../Button"
import Modal from "./Modal"
import type { Server } from "@/types"

interface Props {
    visible: boolean,
    server: Server,
    closeCallback: () => void
}

function EditServerModal ({ visible, server, closeCallback }: Props) {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }

    return (
        <>
            <Modal visible={visible} title={`Edit server: ${server.name}`} closeCallback={closeCallback}>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-end gap-3">
                        <Button variant="secondary" type="button" onClick={closeCallback}>Cancel</Button>
                        <Button>Save</Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default EditServerModal