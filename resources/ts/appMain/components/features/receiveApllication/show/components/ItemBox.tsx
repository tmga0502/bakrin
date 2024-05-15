import React from 'react';

type ItemProps = {
    user: boolean,
    imgSrc: string,
    name: string,
    planName: string,
    shippingTime: string,
}

const ItemBox = (props:ItemProps) => {
    const userName = props.user ? '相手のアイテム' : '自分のアイテム'
    return (
        <div className="bg-white border rounded-md w-full max-w-80 mx-auto">
            <p className="text-center rounded-tl-md rounded-tr-md">{userName}</p>
            <div className="relative overflow-hidden before:content before:pt-[100%] before:block">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src={props.imgSrc} alt={props.name}/>
            </div>
            <div className="p-4">
                <p className="mb-2 font-bold text-center">【{props.planName}】</p>
                <p className="mb-2">{props.name}</p>
                <p className="mb-2">発送時期：{props.shippingTime}</p>
            </div>
        </div>
    );
};

export default ItemBox;
