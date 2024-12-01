import React, {ReactNode} from 'react';
import {IoTrashOutline} from "react-icons/io5";
import { tv } from 'tailwind-variants';
import {FaEye, FaEyeSlash} from "react-icons/fa";

type IconButtonType = {
	icon: 'trash' |  'openEyes' | 'closedEyes',
	color: 'success' | 'danger' | 'warning' | 'info' | 'dark',
	size?  : 'sm' | 'md' | 'lg',
	onClick: any
}

const IconStyleTv = tv({
	base: 'mx-auto pt-1',
	variants:{
		color:{
			success: 'text-success',
			danger: 'text-danger',
			warning: 'text-mainYellow',
			info: 'text-info',
			dark: 'text-bakDark',
		},
		size:{
			sm: 'text-xl',
			md: 'text-2xl',
			lg: 'text-3xl',
		}
	}
})

const ButtonStyleTv = tv({
	base: 'rounded-full border border-bakGray shadow-sm',
	variants:{
		size:{
			sm: 'w-8 h-8',
			md: 'w-10 h-10',
			lg: 'w-12 h-12'
		}
	}
})

const IconButton: React.FC<IconButtonType> = (props) => {
	const {icon,color, size = 'md', onClick} = props
	let Icon: ReactNode
	switch (icon){
		case 'trash':
			Icon = <IoTrashOutline className={IconStyleTv({color: color, size:size})}/>;
			break;
		case 'openEyes':
			Icon = <FaEye className={IconStyleTv({color: color, size:size})}/>;
			break;
		case 'closedEyes':
			Icon = <FaEyeSlash className={IconStyleTv({color: color, size:size})}/>;
			break;
	}

	return (
		<button type={'button'} className={ButtonStyleTv({size:size})} onClick={onClick}>
			{Icon}
		</button>
	);
};

export default IconButton;
