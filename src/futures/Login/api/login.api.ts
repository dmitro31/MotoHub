import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const loginUser = async ( data: { 
    password: string,
    email: string
}) =>  {
    const responce = await api.post("/auth/login/email" , data)
    return responce.data
}
