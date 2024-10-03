import React from 'react';
import {ButtonPanelType} from "./ButtonPanel.type";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {Container, TextStyle, ArrowStyle} from './ButtonPanel.css'

const ButtonPanel: React.FC<ButtonPanelType> = ({name}) => {
	return (
		<div className={Container}>
			<p className={TextStyle}>{name}</p>
			<FaRegArrowAltCircleRight className={ArrowStyle}/>
		</div>
	);
};

export default ButtonPanel;
