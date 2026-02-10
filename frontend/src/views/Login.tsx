import Input from '@/modules/core/inputs/components/Input'
import Link from '@/modules/core/components/Link'
import Button from '@/modules/core/components/Button'
import InputPassword from '@/modules/core/inputs/components/InputPassword'
import Checkbox from '@/modules/core/inputs/components/Checkbox'
import { useEffect, useState } from 'react'
import type { FormEvent, InputEvent, JSX } from 'react'
import useAuthActions from '@/hooks/useAuthActions'
import useAuth from '@/hooks/useAuth'
import { useNavigate } from 'react-router'

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const { login } = useAuthActions()
    const { loggedIn } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(email, password)
        login({
            email: email,
            password: password,
            remember_me: rememberMe
        })
    }

    const handleEmailChange = (e: InputEvent) => {
        setEmail(e.target?.value)
    }

    const handlePasswordChange = (e: InputEvent) => {
        setPassword(e.target?.value)
    }

    const handleRememberMeChange = (e: InputEvent) => {
        setRememberMe(e.target?.checked)
    }

    useEffect(() => {
        if (loggedIn()) {
            navigate('/servers')
        }
    }, [])

    return (
        <>
            <header className="w-screen px-8 py-5">
                <img src="/img/logo_horizontal.png" alt="VirtualHost logo" />
            </header>
            <main className="flex-1 h-full w-screen flex justify-center items-center">
                <div className="px-12 py-16 rounded-lg text-center shadow-[0_2px_10px_1px_#00000020] flex flex-col gap-14">
                    <h1 className="inline-block text-5xl font-bold">Log in</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                        <div className="flex flex-col gap-3 text-right">
                            <Input tabIndex={0} value={email} onChange={handleEmailChange} type="email" placeholder="Email" />
                            <InputPassword tabIndex={1} value={password} onChange={handlePasswordChange} name="password" placeholder="Password" visibility />
                            <Link to="/reset-password" className="text-xs">Forgot your password?</Link>
                        </div>
                        <Checkbox tabIndex={2} value={rememberMe} onChange={handleRememberMeChange} id="remember-me" label="Remember me" labelClass="text-[0.9rem]" />
                        <Button type="submit" full>Log in</Button>
                    </form>
                    <span className="text-xs">Don't have an account yet? <Link to="plans">See our plans</Link></span>
                </div>
            </main>
        </>
    )

}

export default Login