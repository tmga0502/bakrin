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

const getMyItem = async (itemUuid:string) => {
	const{ data, status } = await axios.get<ItemType>(`/api/items/getMyItem/${itemUuid}`);
	if (status >= 400){
		throw new Error('err')
	}
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

const CreateItem = async (formData: ItemType) => {
	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}
	const {data} =  await axios.post('/api/items/create', formData, config);
	return data;
}

const updateItem = async (formData: ItemType) => {
	const { data } = await axios.patch<ItemType>('/api/items/update', formData);
	return data;
}

const deleteItem = async (formData: any) => {
	const { data } = await axios.post<ItemType>(`/api/items/delete`,  formData);
	return data;
}


export {
	getItem,
	getMyItems,
	getMyItem,
	getFavoriteItems,
	getNewArrivalItems,
	getSeasonItems,
	getWantItems,
	CreateItem,
	updateItem,
	deleteItem,
}
