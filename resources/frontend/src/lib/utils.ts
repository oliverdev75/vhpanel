

export const objectLength = (obj: object) => Object.keys(obj).length

export const triggerEvent = (eventName: string, data: object) => {
    const customEvent = new CustomEvent(eventName, { detail: data })
    document.dispatchEvent(customEvent)
}