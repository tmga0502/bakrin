import axios from "axios";
import {UserType} from "@/react/types/UserType";

const getPopularUsers = async () => {
    const{ data } = await axios.get<UserType[]>('/api/users/getPopularUsers');
    return data;
}

const getFavoriteUsers = async () => {
    const{ data } = await axios.get<UserType[]>('/api/users/getFavoriteUsers');
    return data;
}

const getUser = async (userId: string) => {
	const{ data } = await axios.get<UserType>(`/api/users/getUser/${userId}`);
	return data;
}

const getReferralUsers = async () => {
	const{ data } = await axios.get<UserType[]>('/api/users/getReferralUsers');
	return data;
}

const changePassword = async (formData: any) => {
	const{ data } = await axios.post('/api/user/changePassword', formData);
	return data;
}

const userUpdate = async (formData: any) => {
	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}
	const{ data } = await axios.post('/api/user/update', formData, config);
	return data;
}

export {
    getPopularUsers,
    getFavoriteUsers,
	getUser,
	getReferralUsers,
	changePassword,
	userUpdate,
}
