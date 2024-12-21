import React from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {useForm} from "react-hook-form";
import {useRequestPermission} from "@/react/api/query/TradeQuery";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import CheckBox from "@mainElements/form/CheckBox/CheckBox";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

const PermissionButton: React.FC<{tradeId:number}> = ({tradeId}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const {handleSubmit, register} = useForm({defaultValues:{
			tradeId: tradeId,
			use_discount_ticket: false,
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
							{authUser.have_discount_ticket_count > 0 && (
								<div className={'mt-2 mb-4 py-2 border-t border-b'}>
									<p className={'leading-8'}>1取引無料チケットを{authUser.have_discount_ticket_count}枚保有しています。</p>
									<CheckBox text={'取引無料チケットを使用する'} {...register('use_discount_ticket')}/>
								</div>
							)}
							<p className={'text-danger text-xs mb-2'}>
								承認をした段階で取引が成立し、取引手数料が発生します。
							</p>
							<MainButton text={'承認する'} color={'info'} type={'submit'} size={'sm'} align={'center'}/>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default PermissionButton;
