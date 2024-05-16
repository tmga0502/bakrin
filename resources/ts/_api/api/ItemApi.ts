import axios from "axios";
import {ItemType} from "@/ts/types/ItemType";


const getItem = async (itemId:string) => {
    const{ data } = await axios.get<ItemType>(`/api/items/getItem/${itemId}`);
    return data;
}

const getFavoriteItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getFavoriteItems');
    return data;
}

const getNewArrivalItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getNewArrival');
    return data;
}

const getSeasonItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getSeasonItems');
    return data;
}

const getWantItems = async () => {
    const{ data } = await axios.get<ItemType[]>('api/items/getWantItems');
    return data;
}


export {
    getItem,
    getFavoriteItems,
    getNewArrivalItems,
    getSeasonItems,
    getWantItems,
}
