import axios from "axios";

const register = async (formData: any) => {
    const{ data } = await axios.post('/api/favoriteProducer/register', formData);
    return data;
}


const deregister = async (formData: any) => {
    const{ data } = await axios.post('/api/favoriteProducer/deregister', formData);
    return data;
}

export {
    register,
    deregister,
}
