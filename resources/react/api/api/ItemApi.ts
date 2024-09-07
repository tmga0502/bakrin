import axios from "axios";
import {ItemType} from "@/react/types/ItemType";

const getItem = async (itemUuid:string) => {
    const{ data } = await axios.get<ItemType>('/api/items/getItem/' + itemUuid);
    return data;
}

const getMyItems = async () => {
    const{ data } = await axios.get<ItemType[]>('/api/items/getMyItems');
    return data;
}

const getFavoriteItems = async () => {
    const{ data } = await axios.get<ItemType[]>('/api/items/getFavoriteItems');
    return data;
}

const getNewArrivalItems = async () => {
    const{ data } = await axios.get<ItemType[]>('/api/items/getNewArrival');
    return data;
}

const getSeasonItems = async () => {
    const{ data } = await axios.get<ItemType[]>('/api/items/getSeasonItems');
    return data;
}

const getWantItems = async () => {
    const{ data } = await axios.get<ItemType[]>('/api/items/getWantItems');
    return data;
}

const updateItem = async (formData: ItemType) => {
	const { data } = await axios.patch<ItemType>('/api/items/update', formData);
	return data;
}


export {
    getItem,
    getMyItems,
    getFavoriteItems,
    getNewArrivalItems,
    getSeasonItems,
    getWantItems,
	updateItem,
}
