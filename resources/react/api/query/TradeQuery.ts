import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/TradeApi";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

//申請を受けている取引
const useGetTradeRequests = () => {
	return useQuery('tradeRequests', ()=>api.getTradeRequests(),{
		suspense: true,
	})
}

//進行中取引
const useGetOngoingTrades = () => {
	return useQuery('ongoingTrades', ()=>api.getOngoingTrades(),{
		suspense: true,
	})
}

//申請中取引
const useGetPendingTrades = () => {
	return useQuery('pendingTrades', ()=>api.getPendingTrades(),{
		suspense: true,
	})
}

const useGetTrade = (uuid: string) => {
	return useQuery(['trade', uuid], ()=>api.getTrade(uuid),{
		suspense: true,
	})
}

const useRequestTrade = (setIsModalOpen:any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation(api.requestTrade, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries(['trades'])
			toast.success('申請しました')
			navigate(`/trade`)
			setIsModalOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}

export {
	useGetTradeRequests,
	useGetOngoingTrades,
	useGetPendingTrades,
	useGetTrade,
	useRequestTrade,
}
