import {useQuery} from "react-query";
import * as api from "../api/MessageApi";


const useGetMessageLists = () => {
    return useQuery(['MessageLists'], ()=>api.getMessageList(),{
		suspense: true,
	})
}

export {
    useGetMessageLists,
}
