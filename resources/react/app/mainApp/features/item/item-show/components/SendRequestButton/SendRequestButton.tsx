import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {ItemDataType} from "@/react/app/mainApp/features/item/item-show/types/type";

const SendRequestButton: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/items/${itemData.uuid}/requestForm`}>
			<MainButton type={'button'} width={'half'} color={'mainGreen'} text={'申請する'} align={'center'}/>
		</Link>
	);
};

export default SendRequestButton;
