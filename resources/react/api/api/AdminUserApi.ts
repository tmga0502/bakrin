import axios from "axios";
import {AdminUserType} from "@/react/types/AdminUserType";

const getAll = async () => {
	const{ data } = await axios.get<AdminUserType[]>('/api/admin/getAllUser');
	return data;
}

const getUser = async (id: number) => {
	const{ data } = await axios.get<AdminUserType>(`/api/admin/getUser/${id}`);
	return data;
}

const create =  async (formData: AdminUserType) => {
	const { data } = await axios.post<AdminUserType>('/api/admin/create', formData )
	return data
}

const update =  async (formData: AdminUserType) => {
	const { data } = await axios.post<AdminUserType>('/api/admin/update', formData )
	return data
}

export {
	getAll,
	getUser,
	create,
	update,
}
