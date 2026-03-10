import type { ReactNode } from "react"
import Button from "../Button"


interface Props {
    visible: boolean,
    title: ReactNode,
    titleClass: string,
    Footer?: () => ReactNode,
    closeCallback: () => void,
    children: ReactNode
}

function Modal ({ visible, title, titleClass, Footer, closeCallback, children }: Props) {
    if (!visible) return

    return (
        <>
            <div className="absolute top-0 left-0 h-screen w-screen bg-modal backdrop-opacity-25 grid place-content-center">
                <div className="px-6 py-5 bg-white rounded-lg">
                    <header className="mb-4 flex items-center justify-between">
                        <h3 className={`text-xl${titleClass ? ' ' + titleClass : ''}`}>{title}</h3>
                        <Button className="ml-5" icon="close" text onClick={closeCallback} />
                    </header>
                    {children}
                    {
                        Footer && (
                            <footer className="mt-4 flex items-center justify-end gap-3">
                                <Footer />
                            </footer>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Modal