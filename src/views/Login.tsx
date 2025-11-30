import Input from '@/components/Input'

function Login () {

    return (
        <>
            <img src="/img/logo_horizontal.png" className="absolute top-5 left-7" alt="VirtualHost logo" />
            <div className="h-screen w-screen grid place-content-center">
                <div className="">
                    <h1>Log in</h1>
                    <Input />
                    <Input />
                </div>
            </div>
        </>
    )

}

export default Login