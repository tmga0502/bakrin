import axios from "axios";
import {ItemVarietyType} from "@/react/types/ItemVarietyType";

const getVarieties = async () => {
    const{ data } = await axios.get<ItemVarietyType[]>('/api/varieties/getVarieties');
    return data;
}

export {
	getVarieties,
}
