import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {Input} from "@mainElements/form";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import {useRequestReject} from "@/react/api/query/TradeQuery";

const RejectButton: React.FC<{tradeId:number}> = ({tradeId})  => {
	const {register, handleSubmit, formState:{errors}} = useForm({
		defaultValues:{
			'trade_id': tradeId,
			'reason'  : '',
		}
	})
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const reject = useRequestReject(setIsModalOpen);

	const handleModalDisplay = () => {
		setIsModalOpen(!isModalOpen);
	}

	const onSubmit =(data: any) => {
		setIsLoading(true)
		reject.mutate(data)
	}

	return (
		<>
			<MainButton type={'button'} text={'拒否する'} color={'danger'} width={'half'} onClick={handleModalDisplay}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'申請を拒否'}/>
					<ModalBody>
						<p className={'mb-6'}>申請を拒否する場合は理由をお答えください</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup>
								<FormLabel text={'拒否理由'} htmlFor={'reason'}/>
								<Input id='reason' type={'text'} {...register('reason', {required: '入力してください'})}/>
								{errors.reason && (
									<ErrorMessage msg={errors.reason.message as string}/>
								)}
							</FormGroup>
							<MainButton text={'送信する'} color={'info'} type={'submit'} size={'sm'} align={'center'}/>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default RejectButton;
