import { formatBytes } from "bytes-formatter"
import Icon from "../../Icon"
import Tag from "../../Tag"
import Button from "../../Button"
import type { Server } from "@/types"
import ChangeStatusButton from "./ChangeStatusButton"
import { get } from "@/services/api"
import { useEffect, useState } from "react"

interface Props extends Server {
    updateList: () => void,
    handleEdit: (server: Server) => void
    handleDelete: (server: Server) => void
}

function RowServer ({ id, kvm_id, name, cores, memory, os_version, disks, status, installed, updateList, handleEdit, handleDelete }: Props) {
    const [bootStatus, setBootStatus] = useState<0 | 1 | 2>(status)
    const mainDisk = disks.find(disk => disk.pivot.main) || { size: 1 }

    const getChangeStatusCallback = () => {
        switch (bootStatus) {
            case 0:
                return bootServer
            case 1:
                return shutdownServer
        }
    }

    useEffect(() => console.log(installed), [])

    const bootServer = () => {
        setBootStatus(2)
        get(`/server/boot/${id}`)
        .then(res => {
            updateList()
            console.log(res.data)
        })
    }

    const shutdownServer = () => {
        setBootStatus(2)
        get(`/server/shutdown/${id}`)
        .then(res => {
            updateList()
            console.log(res.data)
        })
    }

    return (
        <tr className="bg-white backdrop-opacity-15">
            <td>
                <span>{name}</span>
            </td>
            <td className="flex items-center gap-3">
                <Icon>{os_version.os.shortname}</Icon>
                <span>{`${os_version.os.name} ${os_version.version}`}</span>
            </td>
            <td>
                <Tag className="flex items-center gap-1 pr-2 bg-sky-100 text-sky-500">
                    <Icon>memory</Icon>
                    <span>{cores}</span>
                </Tag>
            </td>
            <td>
                <Tag className="flex items-center gap-1 px-2 bg-red-200 text-red-600">
                    <span>{memory} GB</span>
                </Tag>
            </td>
            <td>
                <Tag className="flex items-center gap-1 pr-2 bg-gray-200 text-gray-600">
                    <Icon>hard_disk</Icon>
                    <span>{disks.length}</span>
                </Tag>
            </td>
            <td>
                <Tag className="flex items-center gap-1 px-2 bg-gray-200 text-gray-600">
                    {formatBytes(mainDisk.size)}
                </Tag>
            </td>
            <td>
                <ChangeStatusButton status={bootStatus} onClick={getChangeStatusCallback} />
            </td>
            <td>
                <div className="flex items-center">
                    <Button
                        disabled={bootStatus === 0}
                        icon="edit"
                        iconClass={bootStatus === 0 ? 'text-gray-500' : 'text-gray-300'}
                        text
                        onClick={bootStatus === 0 ? handleEdit : () => {}}
                    />
                    <Button
                        disabled={bootStatus === 0}
                        icon="delete"
                        iconClass={bootStatus === 0 ? 'text-gray-500' : 'text-gray-300'}
                        text
                        onClick={bootStatus === 0 ? handleDelete : () => {}}
                    />
                </div>
            </td>
        </tr>
    )
}

export default RowServer