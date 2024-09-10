import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "../api/MessageApi";
import {toast} from "react-toastify";


const useGetMessageLists = () => {
    return useQuery(['MessageLists'], ()=>api.getMessageList(),{
		suspense: true,
	})
}

const useGetMessages = (uuid: string) => {
	console.log(uuid)
	return useQuery(['Messages', uuid], ()=>api.getMessages(uuid),{
		suspense: true,
	})
}

const useSendMessage = () => {
	const queryClient = useQueryClient()
	return useMutation(api.sendMessage, {
		onSuccess: (data) => {
			queryClient.invalidateQueries(['Messages', data])
		},
		onError: () => {
			console.error('error')
		}
	})
}

export {
    useGetMessageLists,
	useGetMessages,
	useSendMessage,
}
