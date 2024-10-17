import axios from "axios";
import {WantItemType} from "@/react/types/WantItemType";

const getAllWantItems = async () => {
    const{ data } = await axios.get<WantItemType[]>('/api/wantItems/getAll');
    return data;
}

const CreateWantItem = async (formData: any) => {
	const {data} = await axios.post<WantItemType>('/api/wantItems/create', formData);
	return data;
}

const RemoveWantItem = async (formData: any) => {
	const {data} = await axios.post<WantItemType>('/api/wantItems/remove', formData);
	return data;
}

export {
	getAllWantItems,
	CreateWantItem,
	RemoveWantItem,
}
