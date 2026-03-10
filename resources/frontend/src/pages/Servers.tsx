import { useEffect, useState, type ChangeEvent } from "react"
import useAuth from "../hooks/auth/useAuth"
import Button from "@/components/Button"
import Searchbox from "@/components/inputs/Searchbox"
import Select from "@/components/inputs/Select"
import DataTable from "@/components/tables/DataTable"
import RowServer from "@/components/RowServer"
import DeleteServerModal from "@/components/modals/DeleteServerModal"
import { get } from "@/services/api"
import "@/css/servers.css"
import type { Server } from "@/types"

function Servers () {
    const { user } = useAuth()
    const [search, setSearch] = useState('')
    const [option, setOption] = useState('debian')
    const [serversList, setServersList] = useState<Server[]>([])
    const [editServerModalVisible, setEditServerModalVisible] = useState(false)
    const [deleteServerModalVisible, setDeleteServerModalVisible] = useState(false)
    const [focusedServerData, setFocusedServerData] = useState<Server>()
    
    const colsList = [
        'Name',
        'OS',
        'Cores',
        'RAM Memory',
        'Disks',
        'Main disk size',
    ]

    const List = () => {
        if (serversList.length) {
            return (
                <DataTable colsList={colsList}>
                    {
                        serversList.map(server => (
                            <RowServer
                                key={server.id}
                                {...server}
                                handleEdit={() => handleEditServer(server)}
                                handleDelete={() => handleDeleteServer(server)}
                            />
                        ))
                    }
                </DataTable>
            )
        }
        
        return <span>Loading...</span>
    }

    const handleEditServer = (server: Server) => {
        setFocusedServerData(server)
        setEditServerModalVisible(true)
    }

    const handleDeleteServer = (server: Server) => {
        setFocusedServerData(server)
        setDeleteServerModalVisible(true)
    }

    useEffect(() => {
        get('/user/servers').then(res => {
            setServersList(res.data.data)
        })
    }, [])

    useEffect(() => {
        console.log(focusedServerData)
    }, [deleteServerModalVisible])

    return (
        <>
            <div className="w-full px-10 py-20 flex flex-col gap-2">
                <h2 className="text-4xl font-bold mb-3">Servers</h2>
                <span className="text-lg text-subtitle font-bold">List of servers</span>
                <div className="flex justify-end gap-4">
                    <Button icon="add">Create</Button>
                </div>
                <div className="flex gap-2 items-start">
                    <Searchbox value={search} onChange={(e: ChangeEvent) => setSearch(e.target.value)} placeholder="Search..." />
                    <Select value={option} options={[]} onChange={(value) => setOption(value)} />
                </div>
                <List />
            </div>
            <DeleteServerModal
                visible={deleteServerModalVisible}
                server={focusedServerData}
                closeCallback={() => setDeleteServerModalVisible(false)}
            />
        </>
    )
}

export default Servers