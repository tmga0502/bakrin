import axios from "axios";
import {ItemType} from "@/ts/types/ItemType";
import {authParams} from "@/ts/_api/api/AuthParams";

const params = authParams

const getItem = async (itemId:string) => {
    const{ data } = await axios.get<ItemType>(`/api/items/getItem/${itemId}`);
    return data;
}

const getFavoriteItems = async () => {
    console.log(params)
    const{ data } = await axios.get<ItemType[]>(`api/items/getFavoriteItems${params}`);
    return data;
}

const getNewArrivalItems = async () => {
    const{ data } = await axios.get<ItemType[]>(`api/items/getNewArrival${params}`);
    return data;
}

const getSeasonItems = async () => {
    const{ data } = await axios.get<ItemType[]>(`api/items/getSeasonItems${params}`);
    return data;
}

const getWantItems = async () => {
    const{ data } = await axios.get<ItemType[]>(`api/items/getWantItems${params}`);
    return data;
}


export {
    getItem,
    getFavoriteItems,
    getNewArrivalItems,
    getSeasonItems,
    getWantItems,
}
