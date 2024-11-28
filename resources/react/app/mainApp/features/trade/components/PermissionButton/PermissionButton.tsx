import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {useForm} from "react-hook-form";
import {useRequestPermission} from "@/react/api/query/TradeQuery";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const PermissionButton: React.FC<{tradeId:number}> = ({tradeId}) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const {handleSubmit} = useForm({defaultValues:{
			tradeId: tradeId
		}})
	const permission = useRequestPermission(setIsModalOpen)

	const onSubmit =(data: any) => {
		setIsLoading(true)
		permission.mutate(data);
	}

	return (
		<>
			<MainButton type={'button'} text={'承認する'} color={'success'} width={'half'} onClick={()=>{setIsModalOpen(true)}}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'承認する'}/>
					<ModalBody>
						<p className={'mb-6'}>この申請を承諾しますか？</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<MainButton text={'送信する'} color={'info'} type={'submit'} size={'sm'} align={'center'}/>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default PermissionButton;
