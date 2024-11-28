import React from 'react';

type ImageBoxType = {
	user: boolean,
	imgSrc: string,
	name: string,
	planName: string,
	shippingTime: string,
}

const ImageBox: React.FC<ImageBoxType> = (props) => {
	const {user, imgSrc, name, planName, shippingTime} = props
	const userName = user ? '相手のアイテム' : '自分のアイテム'
	return (
		<div className={'bg-white border border-bakGray rounded-md w-[80%] mx-auto mb-6 sm:mb-0'}>
			<p className={'text-center rounded-t-md'}>{userName}</p>
			<div className={'relative overflow-hidden before:contents-[""] before:block before:pt-[100%]'}>
				<img className={'absolute top-0 left-0 w-full h-full object-cover'} src={imgSrc} alt={name}/>
			</div>
			<div className={'p-4'}>
				<p className={'mb-2 font-bold text-center'}>【{planName}】</p>
				<p className={'mb-2'}>{name}</p>
				<p className={'mb-2'}>発送時期：{shippingTime}</p>
			</div>
		</div>
	);
};

export default ImageBox;
