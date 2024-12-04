import axios from "axios";
import {UserType} from "@/react/types/UserType";

const getAuthCheck = async () => {
    const { data } = await axios.get('/api/authProducerCheck');
    return data
}

const register =  async (formData: any) => {
	const { data } = await axios.post<UserType>('/api/userRegister', formData)
	return data
}

const getCompleteRegistration = async (userUuid: string) => {
	const response = await axios.get(`/api/userCompleteRegistration/${userUuid}`);
	// if(response.status === 404) {
	// 	throw new Error()
	// }
	return response.data
	// try {
	// 	const response = await axios.get(`/api/userCompleteRegistration/${userUuid}`);
	// 	return response.data;
	// } catch (e:any) {
	// 	if (e.response && e.response.status === 404) {
	// 		throw new Error('')
	// 	}
	// }
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
	register,
	getCompleteRegistration,
    login,
    logout,
}
