"use client";

import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";

export default function Cadastro() {
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center shadow-md h-3/4 w-3/4 xl:w-1/2 bg-gradient-to-b from-indigo-300 to-yellow-200 rounded-lg">
                <h1 className="text-lg sm:text-xl">🥳Cadastre-se aqui</h1>
                <form action="" className="flex flex-col w-3/4">
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
                    <button className="bg-green-500 hover:bg-green-400 duration-150 rounded-lg p-3 mt-4 justify-self-end font-bold">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}