import axios from "axios";
import {ItemCategoryType} from "@/ts/types/ItemCategoryType";

const getCategories = async () => {
    const{ data } = await axios.get<ItemCategoryType>('/api/categories/getCategories');
    return data;
}



export {
    getCategories,
}
