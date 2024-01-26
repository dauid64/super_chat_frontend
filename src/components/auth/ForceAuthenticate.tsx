import { APP_ROUTES } from "@/constants/app-routes";
import { checkIsPublicRoute } from "@/functions/check-is-public-route"
import checkUserAuthenticated from "@/functions/checkUserAuthenticated";
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from "react";

export default function ForceAuthenticate(props) {
    const pathname = usePathname()
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(true)

    const isPublicPage = checkIsPublicRoute(pathname)
    

    useEffect(() => {
        const isAuthenticated = checkUserAuthenticated()
        setAuthenticated(isAuthenticated)

        if (!isPublicPage && !isAuthenticated) {
            router.push(APP_ROUTES.public.login)
        }
    }, [])

    return <>{props.children}</>
}