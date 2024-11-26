import axios from "axios";
import {UserType} from "@/react/types/UserType";

const getAuthCheck = async () => {
    const { data } = await axios.get('/api/authProducerCheck');
    return data
}

const login =  async ({email, password }:{email: string, password: string }) => {
    const { data } = await axios.post<UserType>('/api/userLogin', {email, password })
    return data
}

const logout =  async () => {
    const { data } = await axios.post<UserType>('/api/userLogout' )
    return data
}

export {
	getAuthCheck,
    login,
    logout,
}