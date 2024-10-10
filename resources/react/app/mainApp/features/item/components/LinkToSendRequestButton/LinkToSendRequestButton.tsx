import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {ItemDataType} from "@mainFeatures/item/types";

const LinkToSendRequestButton: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/items/${itemData.uuid}/requestForm`}>
			<MainButton type={'button'} width={'half'} color={'mainGreen'} text={'申請する'} align={'center'}/>
		</Link>
	);
};

export default LinkToSendRequestButton;
