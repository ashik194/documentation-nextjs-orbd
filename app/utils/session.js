import Cookies from "js-cookie"

export const sessionStatus = true

export const role = "client"

export const token = () => {
    Cookies.get('token')
}
