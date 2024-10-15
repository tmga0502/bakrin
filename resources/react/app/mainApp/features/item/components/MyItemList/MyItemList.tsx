import React from 'react';
import {Container, RadioBox, Title} from './MyItemList.styles';
import {ItemType} from "@/react/types/ItemType";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import Radio from "@mainElements/form/Radio/Radio";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";
import {MyItemFormRequestStates} from "@mainFeatures/item/states";


const MyItemList: React.FC = () => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	const stMyItemState = useSetRecoilState(MyItemFormRequestStates)

	const handleSelect = (data: any) => {
		stMyItemState(data);
	}

	return (
		<div css={Container}>
			<p css={Title}>【交換に出すアイテムを選択してください】</p>
			<div>
				{userData?.items.map((item: ItemType) => {
					if(item.status === 1){
						return (
							<div css={RadioBox} key={item.id}>
								<Radio
									text={
										<>
											<ItemPlanBadge plan={item.plan}/>
											{item.name}
										</>
									}
									name={'item'}
									onClick={() => {
										handleSelect(item)
									}}
								/>
							</div>
						)
					}
				})}
			</div>
		</div>
	);
};

export default MyItemList;
