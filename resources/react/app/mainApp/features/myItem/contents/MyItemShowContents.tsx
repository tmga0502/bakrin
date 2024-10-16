import React from 'react';
import {AddImageModal, ItemDataDeleteModal, LinkToEditButton, ShowDataTable} from "@mainFeatures/myItem/components";
import {ShowButtonBoxStyle, ShowButtonFlexStyle} from "@mainFeatures/myItem/styles";
import {ItemDataType} from "@mainFeatures/myItem/types";

const MyItemShowContents:React.FC<ItemDataType> = ({itemData}) => {
	return (
		<>
			<ShowDataTable itemData={itemData}/>
			<div css={ShowButtonBoxStyle}>
				<ItemDataDeleteModal uuid={itemData.uuid}/>
				<div css={ShowButtonFlexStyle}>
					<AddImageModal itemData={itemData}/>
					<LinkToEditButton/>
				</div>
			</div>
		</>
	);
};

export default MyItemShowContents;
