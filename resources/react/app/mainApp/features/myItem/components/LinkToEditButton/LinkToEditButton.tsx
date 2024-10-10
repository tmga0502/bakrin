import React from 'react';
import { LinkStyle } from './LinkToEditButton.styles';
import {Link} from "react-router-dom";
import MainButton from "@mainElements/button/MainButton/MainButton";

const LinkToEditButton: React.FC = () => {
	return (
		<Link to={`edit`} css={LinkStyle}>
			<MainButton text={'編集'} width={'full'} color={'success'} type={'button'}/>
		</Link>
	);
};

export default LinkToEditButton;
