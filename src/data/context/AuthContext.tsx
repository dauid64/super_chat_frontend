import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation"

type User = {
    ID: number
    created_at: Date
    email: string
}

type LoginData = {
    email: string
    password: string
}

type AuthContextProps = {
    user?: User
    loading?: boolean
    login?: (data: LoginData) => void
}


const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)

    async function login(data: LoginData) {
        const response = await fetch(BASE_URL_API + '/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        
        const result = await response.json()

        if (response.ok) {
            const { token, user } = result

            Cookies.set('token', token, {
                expires: 7/24
            })

            setUser(user)
            router.push('/chat')
        } else {
            const err = result
            throw new Error(err.erro)
        }
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
                    router.push('/login')
                } else {
                    const result = await response.json()
                    setUser(result)
                }
            }

            fetchData()
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext