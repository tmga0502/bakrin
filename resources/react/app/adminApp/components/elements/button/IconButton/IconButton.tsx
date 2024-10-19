import React, {ReactNode} from 'react';
import {IconButtonType} from "./IconButton.type";
import {IoTrashOutline} from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconStyle, ButtonStyle } from '@adminElements/button/IconButton/IconButton.styles';

const IconButton: React.FC<IconButtonType> = (props) => {
	const {icon,color, size = 'md', type = 'button', onClick} = props
	let Icon: ReactNode
	switch (icon){
		case 'trash':
			Icon = <IoTrashOutline css={IconStyle({color: color, size:size})}/>;
			break;
		case 'openEyes':
			Icon = <FaEye css={IconStyle({color: color, size:size})}/>;
			break;
		case 'closedEyes':
			Icon = <FaEyeSlash css={IconStyle({color: color, size:size})}/>;
			break;
	}

	return (
		<button type={type} css={ButtonStyle({size:size})} onClick={onClick}>
			{Icon}
		</button>
	);
};

export default IconButton;
