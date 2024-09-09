import {useQuery} from "react-query";
import * as api from "../api/MessageApi";


const useGetMessageLists = () => {
    return useQuery(['MessageLists'], ()=>api.getMessageList(),{
		suspense: true,
	})
}

const useGetMessages = (uuid: string) => {
	return useQuery(['Messages', uuid], ()=>api.getMessages(uuid),{
		suspense: true,
	})
}

export {
    useGetMessageLists,
	useGetMessages,
}
