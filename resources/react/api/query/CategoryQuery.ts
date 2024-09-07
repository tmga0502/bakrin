import {useQuery} from "react-query";
import * as api from "../api/CategoryApi";


const useGetCategories = () => {
    return useQuery(['categories'], ()=>api.getCategories(),{
		suspense: true,
	})
}

export {
    useGetCategories,
}
