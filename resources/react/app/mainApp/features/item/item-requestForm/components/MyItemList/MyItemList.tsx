import React from 'react';
import {MyItemListType} from "./MyItemList.type";
import {Container, RadioBox, Title} from './MyItemList.styles';
import {ItemType} from "@/react/types/ItemType";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import Radio from "@/react/app/mainApp/components/elements/form/Radio/Radio";
import ItemPlanBadge from "@/react/app/mainApp/components/elements/budge/ItemPlanBadge/ItemPlanBadge";


const MyItemList: React.FC<MyItemListType> = ({}) => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	console.log(userData)
	return (
		<div css={Container}>
			<p css={Title}>【交換に出すアイテムを選択してください】</p>
			<div>
				{userData?.items.map((item: ItemType) => (
					<div css={RadioBox} key={item.id}>
						<Radio text={
							<>
								<ItemPlanBadge plan={item.plan}/>
								{item.name}
							</>
						} name={'item'}/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyItemList;