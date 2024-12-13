import axios from "axios";
import {AgentUserType} from "@/react/types/AgentUserType";

const getAll = async () => {
	const{ data } = await axios.get<AgentUserType[]>('/api/admin/getAllUser');
	return data;
}

const getUser = async (id: number) => {
	const{ data } = await axios.get<AgentUserType>(`/api/admin/getUser/${id}`);
	return data;
}

const create =  async (formData: AgentUserType) => {
	const { data } = await axios.post<AgentUserType>('/api/admin/create', formData )
	return data
}

const update =  async (formData: AgentUserType) => {
	const { data } = await axios.post<AgentUserType>('/api/admin/update', formData )
	return data
}

export {
	getAll,
	getUser,
	create,
	update,
}
