import {authParams} from "@/ts/_api/api/AuthParams";
import axios from "axios";

const getFavoriteItemState = async ($itemUuid: string) => {
    const uri = authParams(`/api/favoriteItem/getState/${$itemUuid}`)
    const{ data } = await axios.get<boolean>(uri);
    return data;
}

const register = async (formData: any) => {
    const uri = authParams(`/api/favoriteItem/register`)
    const{ data } = await axios.post(uri, formData);
    return data;
}


const deregister = async (formData: any) => {
    const uri = authParams(`/api/favoriteItem/deregister`)
    const{ data } = await axios.post(uri, formData);
    return data;
}

export {
    getFavoriteItemState,
    register,
    deregister,
}
