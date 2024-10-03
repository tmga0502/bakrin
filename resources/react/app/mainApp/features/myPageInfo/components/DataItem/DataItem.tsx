import React from 'react';
import {DataItemType} from "./DataItem.type";
import {DataBody, DataBox, DataTitle} from "./DataItem.css";

const DataItem: React.FC<DataItemType> = ({title, body}) => {
	return (
		<div className={DataBox}>
			<label className={DataTitle}>{title}</label>
			<p className={DataBody}>{body}</p>
		</div>
	);
};

export default DataItem;
