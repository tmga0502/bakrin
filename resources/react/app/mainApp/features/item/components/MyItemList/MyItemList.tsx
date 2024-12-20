import React from 'react';
import {ItemType} from "@/react/types/ItemType";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import Radio from "@mainElements/form/Radio/Radio";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";
import {MyItemFormRequestStates} from "@mainFeatures/item/states";


const MyItemList: React.FC = () => {
	const userData = useRecoilValue(IsAuthUserDataStates);
	const stMyItemState = useSetRecoilState(MyItemFormRequestStates)

	const handleSelect = (data: any) => {
		stMyItemState(data);
	}

	return (
		<div className={'px-8 mb-12'}>
			<p className={'font-bold mb-6'}>【交換に出すアイテムを選択してください】</p>
			<div className={'my-8'}>
				{userData?.items.map((item: ItemType) => {
					if(item.status === 1){
						return (
							<div className={'flex items-center gap-3 mb-4'} key={item.id}>
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
