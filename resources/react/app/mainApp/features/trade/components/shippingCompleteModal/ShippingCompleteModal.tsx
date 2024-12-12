import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {TradeMemberType} from "@/react/types/TradeMemberType";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {FileField, Input} from "@mainElements/form";
import {useForm} from "react-hook-form";
import dayjs from "dayjs";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {useShippingComplete} from "@/react/api/query/TradeQuery";

const ShippingCompleteModal: React.FC<{partnerData: TradeMemberType, myData: TradeMemberType}> = ({partnerData, myData}) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const {register, setValue, handleSubmit, formState:{errors}} = useForm()
	const update = useShippingComplete(setIsModalOpen)
	const today = dayjs().format("YYYY-MM-DD")
	setValue('partner_user_id', partnerData.id)
	setValue('my_user_id', myData.id)

	const buttonLabel = myData.shipping_date !== null ? 'アイテムは発送済みです' : '発送完了したらこちらをクリック';
	const buttonDisabled = myData.shipping_date !== null;

	const onSubmit = (data: any) => {
		update.mutate(data)
	}

	return (
		<>
			<div className={'my-4 w-4/5 mx-auto'}>
				<label className={'text-sm font-bold'}>{buttonLabel}</label>
				<MainButton text={'発送完了の手続きへ'} color={'danger'} type={'button'} width={'full'} onClick={()=>{setIsModalOpen(true)}} disabled={buttonDisabled}/>
			</div>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'発送完了手続き'}/>
					<ModalBody>
						<ContainerSm>
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormGroup>
									<FormLabel text={'発送日'} htmlFor={'shipping_date'}/>
									<Input id='shipping_date' type={'date'} defaultValue={today} {...register('shipping_date', {required: '入力してください'})}/>
									{errors.shipping_date && (
										<ErrorMessage msg={errors.shipping_date.message as string}/>
									)}
								</FormGroup>

								<FormGroup>
									<FormLabel text={'発送伝票'} htmlFor={'shipping_slip'}/>
									<FileField id={'shipping_slip'} {...register('shipping_slip', {required: '選択してください'})}/>
									{errors.shipping_slip && (
										<ErrorMessage msg={errors.shipping_slip.message as string}/>
									)}
								</FormGroup>
								<MainButton text={'送信する'} color={'info'} type={'submit'} size={'sm'} align={'center'}/>
							</form>
						</ContainerSm>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default ShippingCompleteModal;
