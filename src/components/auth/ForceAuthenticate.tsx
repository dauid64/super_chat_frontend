import { APP_ROUTES } from "@/constants/app-routes";
import { checkIsPublicRoute } from "@/functions/check-is-public-route"
import checkUserAuthenticated from "@/functions/checkUserAuthenticated";
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from "react";

export default function ForceAuthenticate(props) {
    const pathname = usePathname()
    const {push} = useRouter()
    const [authenticated, setAuthenticated] = useState(true)

    const isPublicPage = checkIsPublicRoute(pathname)
    

    useEffect(() => {
        const isAuthenticated = checkUserAuthenticated()
        setAuthenticated(isAuthenticated)
    }, [])

    useEffect(() => {
        if (!authenticated) {
            push(APP_ROUTES.public.login)
        }
    }, [authenticated, push])

    if (isPublicPage || (!isPublicPage && authenticated)) {
        return <>{props.children}</>
    }
}