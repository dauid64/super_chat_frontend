import Cookies from 'js-cookie'


export default function checkUserAuthenticated () {
    const userToken = Cookies.get("token")

    if (userToken != undefined) {
        return true
    }
    return false
}