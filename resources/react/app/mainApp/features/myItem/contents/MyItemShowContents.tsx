import React from 'react';
import {AddImageModal, ItemDataDeleteModal, LinkToEditButton, ShowDataTable} from "@mainFeatures/myItem/components";
import {ItemDataType} from "@mainFeatures/myItem/types";

const MyItemShowContents:React.FC<ItemDataType> = ({itemData}) => {
	return (
		<>
			<ShowDataTable itemData={itemData}/>
			<div className={'text-center mt-6 flex items-center justify-between gap-6'}>
				<ItemDataDeleteModal uuid={itemData.uuid}/>
				<div className={'flex items-center gap-6 md:mt-0'}>
					<AddImageModal itemData={itemData}/>
					<LinkToEditButton/>
				</div>
			</div>
		</>
	);
};

export default MyItemShowContents;
