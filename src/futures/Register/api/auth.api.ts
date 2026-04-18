import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const registerUser = async( data: {
        name: string,
        email: string,
        password: string
}) => {
    const responce = await api.post("/auth/register/email" , data)
    return responce.data
}