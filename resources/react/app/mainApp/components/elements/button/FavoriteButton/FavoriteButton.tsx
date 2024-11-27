import React from 'react';
import {FavoriteButtonType} from "./FavoriteButton.type";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {tv} from "tailwind-variants";

const FavoriteButtonTv = tv({
	base: 'block border-2 border-pink rounded-md hover:opacity-80',
	variants:{
		status:{
			true : 'bg-pink text-white',
			false: 'bg-white text-pink',
		},
		width:{
			'full': 'w-full',
			'half': 'w-1/2',
			'': '',
		},
		size:{
			'sm': 'px-2 py-1 text-xs',
			'md': 'px-3 py-2 text-sm',
			'lg': 'px-4 py-3 text-md',
		},
		align:{
			'left'  : 'mr-auto',
			'center': 'mx-auto',
			'right' : 'ml-auto',
		},
	}
})

const FavoriteButton: React.FC<FavoriteButtonType> = (props) => {
	const {value, status, type='button', size ='md', width='', align = 'center', onClick} = props
	const element = status ? <FaHeart style={{ color:'white', fontSize: '1.2rem' }}/> :<FaRegHeart style={{ color:'rgb(236 72 153)', fontSize: '1.2rem' }}/>
	return (
		<button type={type} className={FavoriteButtonTv({status:status, width: width, size: size, align: align})} onClick={onClick}>
			<div className={'flex justify-center items-center'}>
				<span className={'mr-2'}>{value}</span>{element}
			</div>
		</button>
	);
};

export default FavoriteButton;
