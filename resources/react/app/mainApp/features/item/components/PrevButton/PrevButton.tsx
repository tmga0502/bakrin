import React from 'react';
import {Link} from "react-router-dom";
import {ItemDataType} from "@mainFeatures/item/types";
import MainButton from "@mainElements/button/MainButton/MainButton";

const PrevButton: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/items/${itemData?.uuid}`}>
			<MainButton type={'button'} color={'dark'} text={'戻る'} width={'half'}/>
		</Link>
	);
};

export default PrevButton;
