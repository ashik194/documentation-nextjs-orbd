import Cookies from "js-cookie"

export const sessionStatus = true

export const role = "admin"

export const token = () => {
    Cookies.get('token')
}
