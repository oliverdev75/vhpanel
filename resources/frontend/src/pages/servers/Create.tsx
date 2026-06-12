import Input from "@/components/inputs/input/Input"
import Page from "../Page"
import { useEffect, useState } from "react"
import Textbox from "@/components/inputs/Textbox"
import OSSelector from "@/components/inputs/OSSelector"
import Select from "@/components/inputs/Select"
import Button from "@/components/Button"
import Link from "@/components/Link"
import { get, post } from "@/services/api"
import type { OSVersion } from "@/types"
import UserCredentialsSection from "@/components/servers/create/UserCredentialsSection"
import InputPassword from "@/components/inputs/input_password/InputPassword"
import '@/css/servers.css'

function Create () {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [osVersion, setOSVersion] = useState(0)
    const [cores, setCores] = useState('1')
    const [memory, setMemory] = useState('1')
    const [oses, setOSes] = useState<OSVersion[]>()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

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

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        post('/user/server', {
            name,
            description,
            os_version_id: osVersion,
            cores,
            memory,
            user,
            password
        })
        .then(res => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        get('/os/version')
        .then(res => {
            setOSes(res.data)
        })
    }, [])
    
    return (
        <>
            <Page title="Create server">
                <form className="flex flex-col gap-7">
                    <Input
                        type="text"
                        label="Name"
                        value={name}
                        onChange={value => setName(value)}
                        full
                    />
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="description">Description:</label>
                        <Textbox
                            id="description"
                            value={description}
                            onChange={value => setDescription(value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Operating system (Linux):</span>
                        <div className="flex flex-wrap gap-5">
                            {
                                oses?.map(current => (
                                    <OSSelector
                                        key={current.id}
                                        name={`${current.os.name} ${current.version}`}
                                        image={`${current.os.shortname}_${current.version}`}
                                        selected={osVersion === current.id}
                                        changeOS={() => setOSVersion(current.id)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-full flex flex-col gap-2">
                            <span>Cores:</span>
                            <Select
                                options={availableCores}
                                value={cores}
                                onChange={(value) => setCores(value)}
                                full
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <span>RAM:</span>
                            <Select
                                options={availableMemory}
                                value={memory}
                                onChange={(value) => setMemory(value)}
                                full
                            />
                        </div>
                    </div>
                    <UserCredentialsSection>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <Input
                                    type="text"
                                    value={user}
                                    onChange={value => setUser(value)}
                                    label="User"
                                    id="user"
                                />
                            </div>
                            <div className="flex gap-3">
                                <InputPassword
                                    value={password}
                                    onChange={value => setPassword(value)}
                                    label="Password"
                                    id="password"
                                    visibility
                                />
                            </div>
                        </div>
                    </UserCredentialsSection>
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