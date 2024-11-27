import React from 'react';
import {Link} from "react-router-dom";
import {ItemDataType} from "@mainFeatures/item/types";

const UserPanel: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/producers/${itemData.user_id}`}>
			<div className={'p-4 border-2 border-lightGray rounded-md bg-white flex items-center gap-6 hover:opacity-80'}>
				<div className={'w-[64px] h-[64px]'}>
					<img src={itemData.user.thumbnail_path}
						 className={'w-full h-full object-cover rounded-full'}
						 alt={itemData.user.organization_name}/>
				</div>
				<div>
					<p className={'text-xs mb-2'}>{itemData.user.address1 + itemData.user.address2}</p>
					<p>{itemData.user.organization_name}</p>
				</div>
			</div>
		</Link>
	);
};

export default UserPanel;
