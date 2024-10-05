import React from 'react';
import {MyItemListType} from "./MyItemList.type";
import {Container, RadioBox, Title} from './MyItemList.css';
import {ItemType} from "@/react/types/ItemType";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import Radio from "@/react/app/mainApp/components/elements/form/Radio/Radio";


const MyItemList: React.FC<MyItemListType> = ({}) => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	console.log(userData)
	return (
		<div className={Container}>
			<p className={Title}>【交換に出すアイテムを選択してください】</p>
			<div className="my-8">
				{userData?.items.map((item: ItemType) => (
					<div className={RadioBox} key={item.id}>
						<Radio text={item.name} name={'item'}/>
						<label>{item.plan.name}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyItemList;