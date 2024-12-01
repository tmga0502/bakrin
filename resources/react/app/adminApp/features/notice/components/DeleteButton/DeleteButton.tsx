import React, { useState } from 'react';
import MainButton from "@adminElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {useForm} from "react-hook-form";
import {useDeleteData} from "@/react/api/query/NoticeQuery";
import {useSetRecoilState} from "recoil";
import {AdminIsLoadingStates} from "@/react/app/adminApp/states/IsLoadingStates";
import {NoticeType} from "@/react/types/NoticeType";

const DeleteButton: React.FC<{noticeData: NoticeType}> = ({noticeData}) => {
	const setIsLoading = useSetRecoilState(AdminIsLoadingStates)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const {handleSubmit} = useForm({defaultValues:{
			id: noticeData.id
		}})
	const del = useDeleteData();

	const onSubmit = (data: any) => {
		setIsLoading(true)
		del.mutate(data)
	}

	return (
		<>
			<MainButton text={'削除'} color={'danger'} type={'button'} onClick={()=>{setIsModalOpen(true)}}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'このデータを削除しますか？'}/>
					<ModalBody>
						<div className={'flex justify-center gap-12'}>
							<span>
								<MainButton text={'戻る'} color={'default'} type={'button'} onClick={()=>{setIsModalOpen(false)}}/>
							</span>
							<form onSubmit={handleSubmit(onSubmit)}>
								<MainButton text={'削除'} color={'danger'} type={'submit'}/>
							</form>
						</div>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default DeleteButton;
