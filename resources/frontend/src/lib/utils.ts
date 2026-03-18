

export const objectLength = (obj: object) => Object.keys(obj).length

const body = document.getElementsByTagName('body')[0]

export const lockScroll = () => {
    if (!body.classList.contains('overflow-hidden')) {
        body.classList.add('overflow-hidden')
    }
}

export const unlockScroll = () => {
    if (body.classList.contains('overflow-hidden')) {
        body.classList.remove('overflow-hidden')
    }
}