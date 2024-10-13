import React, {useState} from 'react';
import {RadioWrapper} from './ChangePaymentMethodModal.styles'
import MainButton from "@mainElements/button/MainButton/MainButton";
import Radio from "@mainElements/form/Radio/Radio";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import {useForm} from "react-hook-form";
import {useProducerUpdate} from "@/react/api/query/ProducerQuery";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";

const ChangePaymentMethodModal: React.FC = () => {
	const producerData = useRecoilValue(IsAuthProducerDataStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const {handleSubmit, register} = useForm()
	const [isModalOpen, setIsModalOpen] = useState(false);
	const update = useProducerUpdate(setIsModalOpen)

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	}

	const onSubmit = (data: any) => {
		setIsLoading(true)
		update.mutate(data)
	}

	return (
		<>
			<MainButton text={'変更'} color={'default'} type={'button'} size={'sm'} align={'right'} onClick={handleModal}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'支払い方法変更'}/>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div css={RadioWrapper}>
								<Radio text={'銀行振込'} value={0} defaultChecked={producerData.paymentMethod === 0} {...register('paymentMethod')}/>
								<Radio text={'クレジットカード'} value={1} defaultChecked={producerData.paymentMethod === 1} {...register('paymentMethod')}/>
							</div>

							<MainButton text={'変更'} color={'mainGreen'} width={'half'} type={'submit'}/>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default ChangePaymentMethodModal;
