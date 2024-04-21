import Cookies from "js-cookie"

export const sessionStatus = true

export const role = "test"

export const token = () => {
    Cookies.get('token')
}
