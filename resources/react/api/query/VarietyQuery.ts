import {useQuery} from "react-query";
import * as api from "@/react/api/api/VarietyApi";


const useGetVarieties = () => {
    return useQuery(['varieties'], ()=>api.getVarieties(),{
		suspense: true,
	})
}

export {
    useGetVarieties,
}
