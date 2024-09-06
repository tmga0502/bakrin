import axios from "axios";

const changePassword = async (formData: any) => {
    const{ data } = await axios.post('/api/user/changePassword', formData);
    return data;
}



export {
    changePassword,
}
