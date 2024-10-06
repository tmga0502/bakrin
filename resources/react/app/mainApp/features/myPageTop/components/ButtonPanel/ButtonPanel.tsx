import React from 'react';
import {ButtonPanelType} from "./ButtonPanel.type";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {Container, TextStyle, ArrowStyle} from './ButtonPanel.styles'

const ButtonPanel: React.FC<ButtonPanelType> = ({name}) => {
	return (
		<div css={Container}>
			<p css={TextStyle}>{name}</p>
			<FaRegArrowAltCircleRight css={ArrowStyle}/>
		</div>
	);
};

export default ButtonPanel;
