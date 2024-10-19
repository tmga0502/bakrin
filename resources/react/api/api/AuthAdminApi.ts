import axios from "axios";
import {AdminUserType} from "@/react/types/AdminUserType";

const getAdminAuthCheck = async () => {
    const { data } = await axios.get('/api/admin/authCheck');
    return data
}

const adminLogin =  async ({loginId, password }:{loginId: string, password: string }) => {
    const { data } = await axios.post<AdminUserType>('/api/admin/login', {loginId, password })
    return data
}

const adminLogout =  async () => {
    const { data } = await axios.post<AdminUserType>('/api/admin/logout' )
    return data
}

export {
	getAdminAuthCheck,
    adminLogin,
    adminLogout,
}
