import axios from "axios";
import {AgentUserType} from "@/react/types/AgentUserType";
import {UserType} from "@/react/types/UserType";

const getAgentAuthCheck = async () => {
    const { data } = await axios.get('/api/agent/authCheck');
    return data
}

const agentRegister =  async (formData: any) => {
	const { data } = await axios.post<UserType>('/api/agent/agentRegister', formData)
	return data
}

const agentCompleteRegistration = async (agentUuid: string) => {
	const response = await axios.get(`/api/agent/agentCompleteRegistration/${agentUuid}`);
	return response.data
}

const agentLogin =  async ({email, password }:{email: string, password: string }) => {
    const { data } = await axios.post<AgentUserType>('/api/agent/login', {email, password })
    return data
}

const agentLogout =  async () => {
    const { data } = await axios.post<AgentUserType>('/api/agent/logout' )
    return data
}

export {
	getAgentAuthCheck,
	agentRegister,
	agentCompleteRegistration,
    agentLogin,
    agentLogout,
}
