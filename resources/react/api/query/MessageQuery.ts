import {useMutation, useQuery, useQueryClient} from "react-query";
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

const useTradeMessage = () => {
	const queryClient = useQueryClient()
	return useMutation(api.sendTradeMessage, {
		onSuccess: (data) => {
			queryClient.invalidateQueries(['trade', data])
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
	useTradeMessage
}
