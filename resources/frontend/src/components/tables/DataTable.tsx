import type { ReactNode } from "react";
import Table from "./Table";

interface Props {
    colsList: string[],
    children: ReactNode
}

function DataTable ({ colsList, children }: Props) {
    return (
        <Table className="w-full">
                <thead>
                    <tr>
                        {colsList.map((col, index) => <th key={index} className="text-left pb-4">{col}</th>)}
                    </tr>
                </thead>
                <tbody className="w-full">
                    {children}
                </tbody>
        </Table>
    )
}

export default DataTable