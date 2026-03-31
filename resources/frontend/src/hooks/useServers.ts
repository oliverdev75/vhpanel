import { del } from "@/services/api"
import { useState } from "react"

function useServers () {

    const destroy = async (id: number) => {
        const res = await del(`/servers/destroy/${id}`)
        if (res.status === 204) {
            
        }
    }

    return {
        destroy
    }

}

export default useServers