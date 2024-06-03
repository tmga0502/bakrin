import {useQuery} from "react-query";
import * as api from "@/ts/_api/api/CategoryApi";


const useGetCategories = () => {
    return useQuery(['categories'], ()=>api.getCategories())
}

export {
    useGetCategories,
}
