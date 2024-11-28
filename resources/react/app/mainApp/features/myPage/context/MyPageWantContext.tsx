import React from 'react';
import {WantDataType} from "@mainFeatures/myPage/types";
import {FormGroup} from "@mainLayouts/form";
import CheckBox from "@mainElements/form/CheckBox/CheckBox";
import {useCreateWantItem, useRemoveWantItem} from "@/react/api/query/WantItemQuery";

const MyPageWantContext: React.FC<WantDataType> = ({wantItemsData, categoriesData}) => {
	const create = useCreateWantItem();
	const remove = useRemoveWantItem();
	const handleCheck = (e: any, varietyId: number) => {
		if (e.target.checked){
			create.mutate({id: varietyId})
		}else{
			remove.mutate({id: varietyId})
		}
	}

	return (
		<div>
			{categoriesData.map(category => (
				<div className={'mb-6'} key={category.id}>
					<div className={'border border-bakGray rounded-md bg-bakGray p-1'}>
						{category.name}
					</div>

					<div className={'grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3'}>
						{category.varieties.map(variety => {
							const isChecked = wantItemsData.some(item => Number(item.item_variety_id) === variety.id); // yourArray は最初の配列
							return (
								<FormGroup key={variety.id}>
									<CheckBox
										text={variety.name}
										defaultChecked={isChecked}
										onClick={(e)=>{handleCheck(e, variety.id)}}/>
								</FormGroup>
							)
						})}
					</div>
				</div>
			))}
		</div>
	);
};

export default MyPageWantContext;
