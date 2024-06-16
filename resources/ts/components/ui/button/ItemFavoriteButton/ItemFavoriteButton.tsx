import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import { FavoriteButtonType } from './ItemFavoriteButton.type';
import {tv} from "tailwind-variants";

const FavoriteButtonTv = tv({
	base: "border-pink-500 border-solid border-2 py-2 px-4 rounded-lg hover:opacity-8",
	variants: {
		status: {
			true: "bg-pink-500 text-white",
			false: "text-pink-500",
		},
		size: {
			sm: "py-1 px-2 rounded-md",
			md: "py-2 px-4 rounded-xl",
			lg: "py-4 px-6 rounded-2xl",
		},
		width:{
			full: "w-full",
			half: "w-1/2",
			none: "",
		},
		disable: {
			true: "pointer-events-none opacity-20",
		},
		defaultVariants: {
			status: 'false',
			size: 'md',
			width: 'none'
		},
	},
});

const ItemFavoriteButton: React.FC<FavoriteButtonType> = ({value, status, size, width, onClick}) => {
	const element = status ? <FaHeart style={{ color:'white', fontSize: '1.2rem' }}/> :<FaRegHeart style={{ color:'rgb(236 72 153)', fontSize: '1.2rem' }}/>
	return(
		<button className={FavoriteButtonTv({width: width, size: size, status: status})} onClick={onClick}>
			<div className={'flex items-center justify-center'}>
				<span className={'mr-2'}>{value}</span>{element}
			</div>
		</button>
	)
}

export default ItemFavoriteButton;
