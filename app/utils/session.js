import Cookies from "js-cookie"

export const sessionStatus = true

export const role = "clients"

export const token = () => {
    Cookies.get('token')
}
