"use client";

import AuthInput from "@/components/auth/AuthInput"
import { useEffect, useState } from "react";
import useAuth from "@/data/hook/useAuth";

export default function Login() {
    const { login } = useAuth()
    const [erro, setErro] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e: any) {
        e.preventDefault()

        
        const data = {
            email,
            password
        }

        try {
            await login(data)
            setErro(null)
        } catch(erroObj) {
            setErro(erroObj.message)
        }

        return
    }

    useEffect(() => {
        console.log(erro)
    }, [erro])

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center shadow-md h-3/4 w-3/4 xl:w-1/2 bg-gradient-to-b from-indigo-300 to-yellow-200 rounded-lg">
                <h1 className="text-lg sm:text-xl">🥳Faça login aqui</h1>
                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : null}
                <form className="flex flex-col w-3/4" onSubmit={(e) => handleSubmit(e)}>
                    <AuthInput
                        label="E-mail" 
                        tipo="email"
                        onChange={setEmail} 
                        valor={email}
                        obrigatorio
                    ></AuthInput>
                    <AuthInput
                        label="Senha" 
                        tipo="password"
                        onChange={setPassword}
                        valor={password}
                        obrigatorio
                    ></AuthInput>
                    <span className="text-gray-950 text-sm md:text-lg mt-2">Caso não tenha uma conta, <a className="text-blue-600 underline-offset-2 hover:text-blue-500 text-xs md:text-base" href="/cadastro">clique aqui!</a></span>
                    <button 
                    className="bg-green-500 hover:bg-green-400 duration-150 rounded-lg p-3 mt-4 justify-self-end font-bold"
                    >Login</button>
                </form>
            </div>
        </div>
    )
}