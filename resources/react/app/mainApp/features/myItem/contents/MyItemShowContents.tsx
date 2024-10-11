import React from 'react';
import {AddImageModal, ItemDataDeleteModal, LinkToEditButton, ShowDataTable} from "@mainFeatures/myItem/components";
import {ShowButtonBoxStyle, ShowButtonFlexStyle} from "@mainFeatures/myItem/styles";
import {ItemDataType} from "@mainFeatures/myItem/types";

const MyItemShowContents:React.FC<ItemDataType> = ({itemData}) => {
	return (
		<>
			<ShowDataTable itemData={itemData}/>
			<div css={ShowButtonBoxStyle}>
				<ItemDataDeleteModal/>
				<div css={ShowButtonFlexStyle}>
					<AddImageModal/>
					<LinkToEditButton/>
				</div>
			</div>
		</>
	);
};

export default MyItemShowContents;
