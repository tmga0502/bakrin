import React from 'react';
import { ImageBoxType } from './_type';

const ImageBox: React.FC<ImageBoxType> = ({user, imgSrc, name, planName, shippingTime}) => {
	const userName = user ? '相手のアイテム' : '自分のアイテム'
	return (
		<div className="bg-white border rounded-md w-full max-w-80 mx-auto">
			<p className="text-center rounded-tl-md rounded-tr-md">{userName}</p>
			<div className="relative overflow-hidden before:content before:pt-[100%] before:block">
				<img className="absolute top-0 left-0 w-full h-full object-cover" src={imgSrc} alt={name}/>
			</div>
			<div className="p-4">
				<p className="mb-2 font-bold text-center">【{planName}】</p>
				<p className="mb-2">{name}</p>
				<p className="mb-2">発送時期：{shippingTime}</p>
			</div>
		</div>
	);
};

export default ImageBox;
