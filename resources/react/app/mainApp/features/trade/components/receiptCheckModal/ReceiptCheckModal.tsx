import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {useReceiptComplete} from "@/react/api/query/TradeQuery";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {TradeMemberType} from "@/react/types/TradeMemberType";

const ReceiptCheckModal: React.FC<{myData: TradeMemberType}> = ({myData}) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const {handleSubmit} = useForm({
		defaultValues:{
			trade_member_id: myData.id,
			receipt_check  : true,
		}
	})
	const receiptComplete = useReceiptComplete(setIsModalOpen)
	const buttonLabel = myData.receipt_check ? 'アイテムは受取済みです' : '荷物を受け取ったらこちらをクリック';
	const buttonDisabled = myData.receipt_check;

	const onSubmit = (data: any) => {
		receiptComplete.mutate(data)
	}

	return (
		<>
			<div className={'my-4 w-4/5 mx-auto'}>
				<label className={'text-sm font-bold'}>{buttonLabel}</label>
				<MainButton text={'受取完了の手続きへ'} color={'info'} type={'button'} width={'full'} onClick={()=>{setIsModalOpen(true)}} disabled={buttonDisabled}/>
			</div>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'受取完了手続き'}/>
					<ModalBody>
						<ContainerSm>
							<form onSubmit={handleSubmit(onSubmit)}>
								<p className={'text-center my-8'}>荷物を受け取りましたか？</p>
								<MainButton text={'送信する'} color={'info'} type={'submit'} size={'sm'} align={'center'}/>
							</form>
						</ContainerSm>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default ReceiptCheckModal;
