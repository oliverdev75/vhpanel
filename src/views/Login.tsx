import Input from '@/components/Input'

function Login () {

    return (
        <>
        <img src="/img/logo_horizontal.png" className="absolute top-5 left-7" alt="VirtualHost logo" />
            <div className="h-screen w-screen grid place-content-center">
                <div className="px-20 py-16 text-center shadow-md flex flex-col gap-10">
                    <h1 className="inline-block text-4xl font-bold">Log in</h1>
                    <div className="flex flex-col gap-5">
                        <Input placeholder="Username" />
                        <Input placeholder="Password" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login