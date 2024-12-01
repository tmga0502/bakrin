import axios from "axios";
import {AdminUserType} from "@/react/types/AdminUserType";

const getAdminAuthCheck = async () => {
    const { data } = await axios.get('/api/admin/authCheck');
    return data
}

const adminLogin =  async ({login_id, password }:{login_id: string, password: string }) => {
    const { data } = await axios.post<AdminUserType>('/api/admin/login', {login_id, password })
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
