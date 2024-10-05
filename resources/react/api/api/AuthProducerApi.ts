import axios from "axios";
import {AuthToken} from "@/react/types/AuthTokenType";

const getAuthCheck = async () => {
    const { data } = await axios.get('/api/authProducerCheck');
    return data
}

const login =  async ({email, password }:{email: string, password: string }) => {
    const { data } = await axios.post<AuthToken>('/api/producerLogin', {email, password })
    return data
}

const logout =  async () => {
    const { data } = await axios.post<AuthToken>('/api/producerLogout' )
    return data
}

export {
	getAuthCheck,
    login,
    logout,
}
