import React, {useState} from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {useRecoilValue} from "recoil";
import {MyItemFormRequestStates} from "@mainFeatures/item/states";
import {useForm} from "react-hook-form";
import {useRequestTrade} from "@/react/api/query/TradeQuery";
import {ItemDataType} from "@mainFeatures/item/types";
import CheckBox from "@mainElements/form/CheckBox/CheckBox";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

const RequestConfirmModal: React.FC<ItemDataType> = ({itemData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const [isModalOpen, setIsModalOpen] = useState(false);
	const myItemState = useRecoilValue(MyItemFormRequestStates)
	const {register, handleSubmit, setValue, getValues} = useForm({defaultValues: {
		use_discount_ticket: false,
		senderItemId: myItemState?.id,
		recipientItemId: itemData.id,
	}});
	const request = useRequestTrade(setIsModalOpen)
	const buttonDisabled = myItemState === undefined

	const handleModalChange = () => {
		setIsModalOpen(!isModalOpen);
	}

	const onSubmit = () => {
		setValue('senderItemId', myItemState?.id)
		request.mutate(getValues())
	}

	return (
		<>
			<MainButton type={'button'} color={'mainGreen'} width={'half'} text={'申請する'} disabled={buttonDisabled} onClick={handleModalChange}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'申請確認'}/>
					<ModalBody>
						<p>【{myItemState?.name}】</p>
						<p>こちらを交換に出して申請しますか？</p>

						{authUser.have_discount_ticket_count > 0 && (
							<div className={'my-2 py-2 border-t border-b'}>
								<p className={'leading-8'}>1取引無料チケットを{authUser.have_discount_ticket_count}枚保有しています。</p>
								<CheckBox text={'取引無料チケットを使用する'} {...register('use_discount_ticket')}/>
							</div>
						)}

						<p className={'text-danger text-xs mb-2'}>
							相手が取引を承認をした段階で取引が成立し、取引手数料が発生します。
						</p>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={'flex justify-between items-center gap-6 py-4'}>
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
