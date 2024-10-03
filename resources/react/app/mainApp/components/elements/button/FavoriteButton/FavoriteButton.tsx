import React from 'react';
import {FavoriteButtonType} from "./FavoriteButton.type";
import {ButtonStyle, TextStyle, Title} from './FavoriteButton.css';
import {FaHeart, FaRegHeart} from "react-icons/fa";

const FavoriteButton: React.FC<FavoriteButtonType> = (props) => {
	const {value, status, type='button', size, width='none', onClick} = props
	const element = status ? <FaHeart style={{ color:'white', fontSize: '1.2rem' }}/> :<FaRegHeart style={{ color:'rgb(236 72 153)', fontSize: '1.2rem' }}/>
	return (
		<button type={type} className={ButtonStyle({width: width, size: size, status: status})} onClick={onClick}>
			<div className={TextStyle}>
				<span className={Title}>{value}</span>{element}
			</div>
		</button>
	);
};

export default FavoriteButton;
