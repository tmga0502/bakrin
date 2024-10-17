import React from 'react';
import {WantDataType} from "@mainFeatures/myPage/types";
import { CategoryContainer, CategoryTitle, VarietyLists } from '../styles';
import {FormGroup} from "@mainLayouts/form";
import CheckBox from "@mainElements/form/CheckBox/CheckBox";
import {useCreateWantItem, useRemoveWantItem} from "@/react/api/query/WantItemQuery";

const WantContents: React.FC<WantDataType> = ({wantItemsData, categoriesData}) => {
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
				<div css={CategoryContainer} key={category.id}>
					<div css={CategoryTitle}>
						{category.name}
					</div>

					<div css={VarietyLists}>
						{category.varieties.map(variety => {
							const isChecked = wantItemsData.some(item => Number(item.itemVarietyId) === variety.id); // yourArray は最初の配列
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

export default WantContents;
