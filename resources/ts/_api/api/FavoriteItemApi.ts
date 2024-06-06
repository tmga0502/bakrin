import axios from "axios";

const getFavoriteItemState = async ($itemUuid: string) => {
    const{ data } = await axios.get<boolean>('/api/favoriteItem/getState/' + $itemUuid);
    return data;
}

const register = async (formData: any) => {
    const{ data } = await axios.post('/api/favoriteItem/register', formData);
    return data;
}


const deregister = async (formData: any) => {
    const{ data } = await axios.post('/api/favoriteItem/deregister', formData);
    return data;
}

export {
    getFavoriteItemState,
    register,
    deregister,
}
