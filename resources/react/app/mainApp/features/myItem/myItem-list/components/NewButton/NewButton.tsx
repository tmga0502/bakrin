import React from 'react';
import {NewButtonType} from "./NewButton.type";
import {LinkBox, Wrapper} from './NewButton.styles';
import {Link} from "react-router-dom";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const NewButton: React.FC<NewButtonType> = ({}) => {
	return (
		<div css={Wrapper}>
			<Link to={'new'} css={LinkBox}>
				<MainButton text={'新規登録'} color={'danger'} type={'button'} size={'sm'}/>
			</Link>
		</div>
	);
};

export default NewButton;
