import React from 'react';
import {PrevButtonType} from "./PrevButton.type";
import {Margin} from './PrevButton.styles';
import {Link} from "react-router-dom";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const PrevButton: React.FC<PrevButtonType> = ({data}) => {
	return (
		<Link to={`/items/${data?.uuid}`} css={Margin}>
			<MainButton type={'button'} color={'dark'} text={'戻る'} width={'half'}/>
		</Link>
	);
};

export default PrevButton;
