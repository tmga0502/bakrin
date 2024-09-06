import axios from "axios";
import {AuthToken} from "@/ts/types/AuthTokenType";

const getUser = async () => {
    const { data } = await axios.get('/api/getUser');
    return data
}

const login =  async ({email, password }:{email: string, password: string }) => {
    const { data } = await axios.post<AuthToken>('/api/login', {email, password })
    return data
}

const logout =  async () => {
    const { data } = await axios.post<AuthToken>('/api/logout' )
    return data
}

export {
    getUser,
    login,
    logout,
}
