import React from 'react';
import {DataItemType} from "./DataItem.type";
import {DataBody, DataBox, DataTitle} from "./DataItem.styles";

const DataItem: React.FC<DataItemType> = ({title, body}) => {
	return (
		<div css={DataBox}>
			<label css={DataTitle}>{title}</label>
			<p css={DataBody}>{body}</p>
		</div>
	);
};

export default DataItem;
