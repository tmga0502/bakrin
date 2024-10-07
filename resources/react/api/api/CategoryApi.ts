import axios from "axios";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";

const getCategories = async () => {
    const{ data } = await axios.get<ItemCategoryType[]>('/api/categories/getCategories');
    return data;
}



export {
    getCategories,
}
