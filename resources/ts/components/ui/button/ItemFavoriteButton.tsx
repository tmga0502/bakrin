import React from 'react';
import {FavoriteButtonType} from "@/ts/components/ui/button/_type";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {FavoriteButtonTv} from "@/ts/components/ui/button/_function";

const ItemFavoriteButton = (props: FavoriteButtonType) => {
	const element = props.status ? <FaHeart style={{ color:'white', fontSize: '1.2rem' }}/> :<FaRegHeart style={{ color:'rgb(236 72 153)', fontSize: '1.2rem' }}/>
	return(
		<button className={FavoriteButtonTv({width: props.width, size: props.size, status: props.status})} onClick={props.onClick}>
			<div className={'flex items-center justify-center'}>
				<span className={'mr-2'}>{props.value}</span>{element}
			</div>
		</button>
	)
}

export default ItemFavoriteButton;
