import type { FormEvent } from "react"
import Button from "../Button"
import Modal from "./Modal"
import type { Server } from "@/types"
import Input from "../inputs/input/Input"
import Textbox from "../inputs/Textbox"

interface Props {
    visible: boolean,
    server?: Server,
    setServer: (name: keyof Server, value: string | undefined) => void,
    closeCallback: () => void
}

function EditServerModal ({ visible, server, setServer, closeCallback }: Props) {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }

    return (
        <>
            <Modal visible={visible} title={`Edit server: ${server?.name}`} closeCallback={closeCallback}>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        label="Name"
                        value={server?.name}
                        onChange={value => setServer('name', value)}
                        full
                    />
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="description">Description:</label>
                        <Textbox
                            id="description"
                            value={server?.description}
                            onChange={value => setServer('description', value)}
                        />
                    </div>
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