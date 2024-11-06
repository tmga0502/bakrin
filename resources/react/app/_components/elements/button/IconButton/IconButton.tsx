import React, {ReactNode} from 'react';
import {IconButtonType} from "./IconButton.type";
import {ButtonStyle, IconStyle} from './IconButton.styles';
import {IoTrashOutline} from "react-icons/io5";

const IconButton: React.FC<IconButtonType> = (props) => {
	const {icon,color, size = 'md', onClick} = props
	let Icon: ReactNode
	switch (icon){
		case 'trash':
			Icon = <IoTrashOutline css={IconStyle({color: color, size:size})}/>;
			break;
	}

	return (
		<button css={ButtonStyle({size:size})} onClick={onClick}>
			{Icon}
		</button>
	);
};

export default IconButton;
