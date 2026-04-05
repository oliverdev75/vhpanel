import Input from "@/components/inputs/input/Input"
import Page from "../Page"
import { useState, type ChangeEvent } from "react"
import Textbox from "@/components/inputs/Textbox"
import OSSelector from "@/components/inputs/OSSelector"
import Select from "@/components/inputs/Select"
import Button from "@/components/Button"
import Link from "@/components/Link"
import { post } from "@/services/api"

function Create () {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [os, setOS] = useState('')
    const [cores, setCores] = useState('1')
    const [memory, setMemory] = useState('1')

    const oses = [
        {
            name: 'Ubuntu',
            image: 'ubuntu',
        },
        {
            name: 'Debian',
            image: 'debian',
        },
    ]

    const availableCores = [
        {
            name: '1',
            value: '1'
        },
        {
            name: '2',
            value: '2'
        },
    ]

    const availableMemory = [
        {
            name: '1 GB',
            value: '1'
        },
        {
            name: '2 GB',
            value: '2'
        },
    ]

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value)
    }

    const handleSubmit = () => {
        post('/server', {
            name,
            description,
            os,
            cores,
            memory
        })
        .then(res => {
            console.log(res.data)
        })
    }
    
    return (
        <>
            <Page title="Create server">
                <form className="flex flex-col gap-7">
                    <Input type="text" label="Name" value={name} onChange={handleNameChange} full />
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="description">Description:</label>
                        <Textbox id="description" value={description} onChange={handleDescriptionChange} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Operating system (Linux):</span>
                        <div className="flex gap-5">
                            {
                                oses.map(current => (
                                    <OSSelector
                                        key={current.name}
                                        {...current}
                                        value={os}
                                        changeOS={() => setOS(current.name)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="vcores">Cores:</label>
                            <Select options={availableCores} value={cores} onChange={(value) => setCores(value)} full />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="ram">RAM:</label>
                            <Select options={availableMemory} value={memory} onChange={(value) => setMemory(value)} full />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 items-center">
                        <Link to="/servers">
                            <Button type="button" variant="secondary">Cancel</Button>
                        </Link>
                        <Button onClick={handleSubmit}>Create</Button>
                    </div>
                </form>
            </Page>
        </>
    )
}

export default Create