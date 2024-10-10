import React from 'react';
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {CardContainer, CardIcon, CardText} from "@mainFeatures/myPage/styles";
import {CardTitleType} from "@mainFeatures/myPage/types";

const TopListPanel: React.FC<CardTitleType> = ({title}) => {
	return (
		<div css={CardContainer}>
			<p css={CardText}>{title}</p>
			<FaRegArrowAltCircleRight css={CardIcon}/>
		</div>
	);
};

export default TopListPanel;
