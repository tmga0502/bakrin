import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/TradeApi";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

//申請を受けている取引
const useGetTradeRequests = () => {
	return useQuery('tradeRequests', ()=>api.getTradeRequests(),{
		suspense: true,
	})
}

//申請中取引
const useGetPendingTrades = () => {
	return useQuery('pendingTrades', ()=>api.getPendingTrades(),{
		suspense: true,
	})
}

//完了した取引
const useGetCompletedTrades = () => {
	return useQuery('ongoingTrades', ()=>api.getCompletedTrades(),{
		suspense: true,
	})
}

//進行中の取引
const useGetOngoingTrades = () => {
	return useQuery('ongoingTrades', ()=>api.getOngoingTrades(),{
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

const useRequestPermission = (setIsModalOpen:any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const setUserData = useSetRecoilState(IsAuthUserDataStates);
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation(api.requestPermission, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data: any) => {
			console.log(data)
			setIsLoading(false)
			queryClient.invalidateQueries(['trades'])
			toast.success('承認しました')
			setUserData(data)
			navigate(`/trade`)
			setIsModalOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}


const useRequestReject = (setIsModalOpen:any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation(api.requestReject, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries(['trades'])
			toast.success('送信しました')
			navigate(`/trade`)
			setIsModalOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}

const useUpdateShippingId = () => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	return useMutation(api.updateShippingId, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries(['trade', data.uuid])
			toast.success('届け先住所を登録しました。')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}

//発送完了処理
const useShippingComplete = (setIsModalOpen:any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	return useMutation(api.shippingComplete, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries(['trade', data.uuid])
			setIsModalOpen(false)
			toast.success('発送完了の手続きを行いました。')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}

//荷物の受取完了処理
const useReceiptComplete = (setIsModalOpen:any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	return useMutation(api.receiptComplete, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries(['trade', data.uuid])
			setIsModalOpen(false)
			toast.success('受取完了の手続きを行いました。')
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
	useGetCompletedTrades,
	useGetTrade,
	useRequestTrade,
	useRequestPermission,
	useRequestReject,
	useUpdateShippingId,
	useShippingComplete,
	useReceiptComplete,
}
