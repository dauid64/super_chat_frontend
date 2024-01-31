import { APP_ROUTES } from "@/constants/app-routes";
import useAuth from "@/data/hook/useAuth";
import { checkIsPublicRoute } from "@/functions/check-is-public-route"
import checkUserAuthenticated from "@/functions/checkUserAuthenticated";
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import LoadingGif from "../../../public/imgs/loading.gif"
import Image from 'next/image';

export default function ForceAuthenticate(props) {
    const pathname = usePathname()
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(true)
    const {loading} = useAuth()

    const isPublicPage = checkIsPublicRoute(pathname)
    
    useEffect(() => {
        const isAuthenticated = checkUserAuthenticated()
        setAuthenticated(isAuthenticated)

        if (!isPublicPage && !isAuthenticated) {
            router.push(APP_ROUTES.public.login)
        }
    }, [])

    if (loading) {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={LoadingGif} alt='Loading' />
            </div>
        );
    } else {
        return <>{props.children}</>
    }
}