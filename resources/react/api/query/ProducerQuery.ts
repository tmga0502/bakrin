import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/ProducerApi";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const useGetPopularProducers = () => {
    return useQuery('popularProducers', ()=>api.getPopularProducers(),{
		suspense: true,
	})
}

const useGetFavoriteProducers = () => {
    return useQuery('favoriteProducers', ()=>api.getFavoriteProducers(),{
		suspense: true,
	})
}

const useGetProducer = (producerUuid: any) => {
	return useQuery(['producer', producerUuid], ()=>api.getProducer(producerUuid),{
		suspense: true,
	})
}

const useChangePassword = (setIsModalOpen: any, reset: any) => {
	const queryClient = useQueryClient()
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	return useMutation(api.changePassword, {
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries('password')
			toast.success('パスワードを変更しました。')
			setIsModalOpen(false)
			reset()
		},
		onError: () => {
			setIsLoading(false)
			toast.error('パスワードを変更できませんでした。\n現在のパスワードをお確かめの上、再度更新してください')
		}
	})
}

const useProducerUpdate = (setIsModalOpen:any) => {
	const queryClient = useQueryClient()
	const setProducerData = useSetRecoilState(IsAuthProducerDataStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	return useMutation(api.producerUpdate, {
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries('authProducer')
			toast.success('変更しました。')
			setProducerData(data)
			setIsModalOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('変更できませんでした。')
		}
	})
}

export {
    useGetPopularProducers,
    useGetFavoriteProducers,
	useGetProducer,
	useChangePassword,
	useProducerUpdate,
}
