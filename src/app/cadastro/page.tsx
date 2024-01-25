"use client";

import AuthInput from "@/components/auth/AuthInput";
import { useRouter } from 'next/navigation'
import { useState } from "react";

const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL

export default function Cadastro() {
    const router = useRouter()
    const [erro, setErro] = useState(null)
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')

    function showErro(msg: String) {
        setErro(msg)
    }

    async function Register(e) {
        e.preventDefault()

        const response = await fetch(BASE_URL_API + "/usuarios", {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": senha
            }),
        })

        if (response.ok) {
            setErro(null)
            router.push("/chat")
        } else {
            const err = await response.json()
            showErro(err.erro)
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center shadow-md h-3/4 w-3/4 xl:w-1/2 bg-gradient-to-b from-indigo-300 to-yellow-200 rounded-lg">
                <h1 className="text-lg sm:text-xl">🥳Cadastre-se aqui</h1>
                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : null}
                <form action="/usuarios" className="flex flex-col w-3/4" onSubmit={(e) => Register(e)}>
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
                        valor={senha}
                        obrigatorio
                    ></AuthInput>
                    <button 
                    className="bg-green-500 hover:bg-green-400 duration-150 rounded-lg p-3 mt-4 justify-self-end font-bold"
                    >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}