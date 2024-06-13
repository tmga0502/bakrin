import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import { FavoriteButtonType } from './ItemFavoriteButton.type';
import { FavoriteButtonTv } from './ItemFavoriteButton.tv';

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
