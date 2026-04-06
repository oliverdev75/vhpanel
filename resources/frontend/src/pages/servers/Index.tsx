import { useEffect, useState, type ChangeEvent } from "react"
import Page from "../Page"
import Searchbox from "@/components/inputs/Searchbox"
import Select from "@/components/inputs/Select"
import DataTable from "@/components/tables/DataTable"
import RowServer from "@/components/servers/index/RowServer"
import DeleteServerModal from "@/components/modals/DeleteServerModal"
import { get } from "@/services/api"
import type { Server } from "@/types"
import Link from "@/components/Link"
import Button from "@/components/Button"
import '@/css/servers.css'

function Servers () {
    const [search, setSearch] = useState('')
    const [option, setOption] = useState('debian')
    const [serversList, setServersList] = useState<Server[]>([])
    //const [editServerModalVisible, setEditServerModalVisible] = useState(false)
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
                                updateList={getServers}
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

    const getServers = () => {
        get('/user/servers').then(res => {
            setServersList(res.data.data)
        })
    }

    const handleEditServer = (server: Server) => {
        setFocusedServerData(server)
        //setEditServerModalVisible(true)
    }

    const handleDeleteServer = (server: Server) => {
        setFocusedServerData(server)
        setDeleteServerModalVisible(true)
    }

    useEffect(() => {
        getServers()
    }, [])

    useEffect(() => {
        console.log(focusedServerData)
    }, [deleteServerModalVisible])

    return (
        <>
            <Page title="Servers" subtitle="List of servers">
                <div className="flex justify-end gap-4">
                    <Link to="/servers/create">
                        <Button icon="add">Create</Button>
                    </Link>
                </div>
                <div className="flex gap-2 items-start">
                    <Searchbox value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)} placeholder="Search..." />
                    <Select value={option} options={[]} onChange={(value) => setOption(value)} />
                </div>
                <List />
            </Page>
            <DeleteServerModal
                visible={deleteServerModalVisible}
                server={focusedServerData}
                closeCallback={() => setDeleteServerModalVisible(false)}
            />
        </>
    )
}

export default Servers