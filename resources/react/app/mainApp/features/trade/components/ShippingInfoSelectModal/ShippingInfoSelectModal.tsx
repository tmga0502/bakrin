import React, { useState } from 'react';
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {TradeMemberType} from "@/react/types/TradeMemberType";
import Tab from "@mainLayouts/tab/Tab/Tab";
import ShippingInfoCreateForm from "@mainFeatures/trade/components/shippingInfoCreateForm/ShippingInfoCreateForm";
import ShippingInfoList from "@mainFeatures/trade/components/shippingInfoList/ShippingInfoList";

const ShippingInfoSelectModal: React.FC<{myData: TradeMemberType}> = ({myData}) => {
	const [mode, setMode] = useState<'登録済みから選択'| '新規登録'>('登録済みから選択')
	const tabMenu = ['登録済みから選択', '新規登録']
	return (
		<Modal>
			<ModalTitle title={'届け先住所選択'}/>
			<ModalBody>
				<p className={'mb-2'}>届け先の住所を選択してください</p>
				<p className={'mb-4 text-danger text-xs'}>
					※ご自宅の住所等、相手から送ってもらうアイテムを受け取る住所です。
				</p>
				<Tab mode={mode} setMode={setMode} tabMenu={tabMenu}/>
				{mode === '新規登録' ? (
					<ShippingInfoCreateForm setMode={setMode}/>
				):(
					<ShippingInfoList myData={myData}/>
				)}
			</ModalBody>
		</Modal>
	);
};

export default ShippingInfoSelectModal;
