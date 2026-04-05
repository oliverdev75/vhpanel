import api from "../config/api"

const parseUrlVars = (vars: Object) => (new URLSearchParams(vars.toString())).toString()

export const get = async (endpoint: string, vars: object | null = null) => {
    console.log(vars)
    const parsedVars = vars ? parseUrlVars(vars) : ''
    try {
        return await api.get(endpoint + parsedVars)
    } catch (err: any) {
        throw new Error(err)
    }
}

export const post = async (endpoint: string, data: object, vars: object | null = null) => {
    console.log(vars)
    const parsedVars = vars ? `?${parseUrlVars(vars)}` : ''
    try {
        return await api.post(endpoint + parsedVars, data)
    } catch (err: any) {
        throw new Error(err)
    }
}

export const put = async (endpoint: string, data: object, vars: object | null = null) => {
    console.log(vars)
    let response = {}
    const parsedVars = vars ? parseUrlVars(vars) : ''
    api.put(`${endpoint}?${parsedVars}`, data)
        .then(res => {
            response = res.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return response
}

export const del = async (endpoint: string, vars: object | null = null) => {
    console.log(vars)
    let response = { status: 0 }
    const parsedVars = vars ? parseUrlVars(vars) : ''
    api.delete(`${endpoint}?${parsedVars}`)
        .then(res => {
            response = res.data.data
        })
        .catch(error => {
            console.log(error)
        })

    return response
}