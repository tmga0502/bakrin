import React from 'react';
import {MainButtonType} from "./MainButton.type";
import {tv} from "tailwind-variants";

const MainButtonTv = tv({
	base: 'block rounded-md whitespace-nowrap hover:opacity-80 text-white',
	variants:{
		width:{
			'full': 'w-full',
			'half': 'w-1/2',
			'': '',
		},
		bg:{
			'mainGreen' : 'bg-mainGreen',
			'mainYellow': 'bg-mainYellow',
			'danger'    : 'bg-danger',
			'info'      : 'bg-info',
			'success'   : 'bg-success',
			'dark'      : 'bg-bakDark',
			'default'   : 'bg-default',
		},
		size:{
			'sm': 'px-2 py-1 text-sm',
			'md': 'px-3 py-2 text-sm',
			'lg': 'px-4 py-3 text-md',
		},
		align:{
			'left'  : 'mr-auto',
			'center': 'mx-auto',
			'right' : 'ml-auto',
		},
		disabled:{
			true : 'bg-lightGray opacity-80 hover:cursor-not-allowed',
			false: 'opacity-100 hover:cursor-pointer',
		}
	}
})

const MainButton: React.FC<MainButtonType> = (props) => {
	const {text, color = 'mainGreen', size = 'md', type , width = '' , align = 'center', onClick, disabled = false } = props
	return (
		<button
			type={type}
			className={MainButtonTv({width: width, bg: color, size:size, align: align, disabled: disabled})}
			disabled={disabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default MainButton;
