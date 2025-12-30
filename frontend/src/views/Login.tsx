import Input from '@/components/inputs/Input'
import Link from '@/components/Link'
import Button from '@/components/Button'
import InputPassword from '@/components/inputs/InputPassword'
import Checkbox from '@/components/inputs/Checkbox'

function Login () {

    return (
        <>
            <header className="w-screen px-8 py-5">
                <img src="/img/logo_horizontal.png" alt="VirtualHost logo" />
            </header>
            <main className="flex-1 h-full w-screen flex justify-center items-center">
                <div className="px-12 py-16 rounded-lg text-center shadow-[0_2px_10px_1px_#00000020] flex flex-col gap-14">
                    <h1 className="inline-block text-5xl font-bold">Log in</h1>
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-3 text-right">
                            <Input placeholder="Username" />
                            <InputPassword placeholder="Password" visibility />
                            <Link className="text-xs">Forgot your password?</Link>
                        </div>
                        <Checkbox name="remember_me" id="remember-me" label="Remember me" labelClass="text-[0.9rem]" />
                        <Button full>Log in</Button>
                    </div>
                    <span className="text-xs">Don't have an account yet? <Link>See our plans</Link></span>
                </div>
            </main>
        </>
    )

}

export default Login