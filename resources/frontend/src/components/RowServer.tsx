import { formatBytes } from "bytes-formatter"
import Icon from "./Icon"
import Tag from "./Tag"
import Button from "./Button"
import type { Server } from "@/types"

interface Props extends Server {
    handleEdit: (server: Server) => void
    handleDelete: (server: Server) => void
}

function RowServer ({ id, name, cores, memory, os_version, disks, status, installed, handleEdit, handleDelete }: Props) {

    const mainDisk = disks.find(disk => disk.pivot.main)

    return (
        <tr className="bg-white backdrop-opacity-15">
            <td>
                <span>{name}</span>
            </td>
            <td className="flex items-center gap-3">
                <Icon>{os_version.os.short_name}</Icon>
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
                    {formatBytes(mainDisk?.size)}
                </Tag>
            </td>
            <td>
                <div className="flex items-center">
                    <Button icon="edit" iconClass="text-gray-500" text onClick={handleEdit} />
                    <Button icon="delete" iconClass="text-gray-500" text onClick={handleDelete} />
                </div>
            </td>
        </tr>
    )
}

export default RowServer