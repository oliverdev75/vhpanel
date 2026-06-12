import api from "../config/api"

const parseUrlVars = (vars: Object) => (new URLSearchParams(vars.toString())).toString()

export const get = async (endpoint: string, vars: object | null = null) => {
    console.log(vars)
    const parsedVars = vars ? parseUrlVars(vars) : ''

    return await api.get(endpoint + parsedVars)
}

export const post = async (endpoint: string, data: object, vars: object | null = null) => {
    console.log(vars)
    const parsedVars = vars ? `?${parseUrlVars(vars)}` : ''

    return await api.post(endpoint + parsedVars, data)
}

export const put = async (endpoint: string, data: object, vars: object | null = null) => {
    console.log(vars)
    const parsedVars = vars ? parseUrlVars(vars) : ''
    const response = api.put(`${endpoint}?${parsedVars}`, data)

    return response
}

export const del = async (endpoint: string, vars: object | null = null) => {
    console.log(vars)
    const parsedVars = vars ? parseUrlVars(vars) : ''

    return api.delete(`${endpoint}?${parsedVars}`)
}