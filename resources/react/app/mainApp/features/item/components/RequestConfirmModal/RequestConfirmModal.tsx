import React, {useState} from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {useRecoilValue} from "recoil";
import {MyItemFormRequestStates} from "@mainFeatures/item/states";
import {useForm} from "react-hook-form";
import {useRequestTrade} from "@/react/api/query/TradeQuery";
import {ItemDataType} from "@mainFeatures/item/types";
import {ButtonBox} from "@mainFeatures/item/components/RequestConfirmModal/RequestConfirmModal.styles";

const RequestConfirmModal: React.FC<ItemDataType> = ({itemData}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const myItemState = useRecoilValue(MyItemFormRequestStates)
	const {handleSubmit, setValue, getValues} = useForm()
	const request = useRequestTrade(setIsModalOpen)
	const buttonDisabled = myItemState === undefined


	const handleModalChange = () => {
		setIsModalOpen(!isModalOpen);
	}

	const onSubmit = () => {
		setValue('senderItemId', myItemState?.id);
		setValue('recipientItemId', itemData.id);
		request.mutate(getValues())
	}
console.log(myItemState)

	return (
		<>
			<MainButton type={'button'} color={'mainGreen'} width={'half'} text={'申請する'} disabled={buttonDisabled} onClick={handleModalChange}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'申請確認'}/>
					<ModalBody>
						<p>【{myItemState?.name}】</p>
						<p>こちらを交換に出して申請しますか？</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div css={ButtonBox}>
								<MainButton text={'キャンセル'} color={'dark'} type={'button'} width={'full'} size={'sm'} onClick={() => {
									setIsModalOpen(false)
								}}/>
								<MainButton text={'申請する'} color={'info'} type={'submit'} width={'full'} size={'sm'}/>
							</div>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default RequestConfirmModal;
