import axios from "axios";
import {AuthToken} from "@/ts/types/AuthTokenType";
import {authParams} from "@/ts/_api/api/AuthParams";

const getUser = async () => {
    const uri = authParams(`/api/getUser`)
    const { data } = await axios.get(uri);
    return data
}

const login =  async ({email, password }:{email: string, password: string }) => {
    const { data } = await axios.post<AuthToken>('/api/login', {email, password })
    return data
}

const logout =  async () => {
    const authToken : string | null = sessionStorage.getItem('authToken')
    const { data } = await axios.post<AuthToken>('/api/logout', {authToken} )
    return data
}

export {
    getUser,
    login,
    logout,
}
