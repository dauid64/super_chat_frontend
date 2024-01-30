import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation"
import axios from 'axios';

type User = {
    created_at: Date
    email: string
}

type LoginData = {
    email: string
    password: string
}

type AuthContextProps = {
    user: User
    login: (data: LoginData) => Promise<string>
}


const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider(props) {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)

    async function login(data: LoginData): Promise<string> {
        const response = await fetch(BASE_URL_API + '/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            const responseObj = await response.json()
            return responseObj.erro
        }
        const { token, user } = await response.json()

        Cookies.set('token', token, {
            expires: 7/24
        })

        setUser(user)

        router.push('/chat')
        return ''
    }

    useEffect(() => {
        if (Cookies.get('token')) {
            const token = Cookies.get('token')
            const fetchData = async () => {
                
                const response = await fetch(BASE_URL_API + '/recuperar/usuario', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
                })
                if (!response.ok) {
                    console.log('ERRO')
                } else {
                    const result = await response.json()
                    setUser(result)
                }
            }

            fetchData()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, login}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext