import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/NoticeApi";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/adminApp/states/IsLoadingStates";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


const useGetAll = () => {
    return useQuery(['notices'], ()=>api.getNotices(),{
		suspense: true,
	})
}

const useGetData = (uuid: string) => {
	return useQuery(['notice', uuid], ()=>api.getNotice(uuid),{
		suspense: true,
	})
}

const useCreateData = () => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation(api.createNotice, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries(['notice', data.uuid])
			toast.success('登録しました')
			navigate('/admin/notice')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('登録できませんでした。')
		}
	})
}

const useDeleteData = () => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation(api.deleteNotice, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries(['notices'])
			toast.success('削除しました')
			navigate('/admin/notice')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('削除できませんでした。')
		}
	})
}

export {
    useGetAll,
	useGetData,
	useCreateData,
	useDeleteData,
}
