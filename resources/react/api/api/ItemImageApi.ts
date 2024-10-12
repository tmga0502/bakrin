import axios from "axios";
import {ItemType} from "@/react/types/ItemType";


const createImage = async (formData: ItemType) => {
	const config = {
		headers: {
			'content-type': 'multipart/form-data'
		}
	}
	const {data} =  await axios.post('/api/items/image/create', formData, config);
	return data;
}

const deleteImage = async (formData: { uuid: string }) => {
	const { data } = await axios.post<ItemType>(`/api/items/image/delete`, formData);
	return data;
}


export {
	createImage,
	deleteImage,
}
