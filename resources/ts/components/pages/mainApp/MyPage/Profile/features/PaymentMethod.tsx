import React from 'react';
import {useAuth} from "@/ts/hooks/AuthContext";
import { MainButton } from '@/ts/components/ui/button';
import { RadioBox } from '@/ts/components/ui/form';

const MyPageProfileData = () => {
	const {userData} = useAuth();
	return (
		<div className="w-full bg-white p-4 mt-6">
			<p className="border-b-2 pb-2 mb-4">支払い方法変更</p>
			<RadioBox label={'銀行振込'} name={'paymentMethod'} id={'bank'} value={0} defaultChecked={userData.paymentMethod === 0}/>
			<RadioBox label={'クレジットカード'} name={'paymentMethod'} id={'creditCard'} value={1} defaultChecked={userData.paymentMethod === 1}/>

			<div className="text-center">
				<MainButton value={'変更'} color={'mainGreen'} width={'half'} type={'submit'}/>
			</div>
		</div>
	);
};

export default MyPageProfileData;
