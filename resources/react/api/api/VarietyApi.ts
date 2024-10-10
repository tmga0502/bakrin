import axios from "axios";
import {VarietyType} from "@/react/types/VarietyType";

const getVarieties = async () => {
    const{ data } = await axios.get<VarietyType[]>('/api/varieties/getVarieties');
    return data;
}

export {
	getVarieties,
}
