import axios from "axios";

const register = async (formData: any) => {
    const{ data } = await axios.post('/api/favoriteUser/register', formData);
    return data;
}


const deregister = async (formData: any) => {
    const{ data } = await axios.post('/api/favoriteUser/deregister', formData);
    return data;
}

export {
    register,
    deregister,
}
