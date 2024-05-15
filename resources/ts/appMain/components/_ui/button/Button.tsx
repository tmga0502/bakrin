import React from 'react';
import {
    AuthButtonType,
    FavoriteButtonType,
    IconButtonType,
    MainButtonType,
    MoreButtonType,
    SubmitButtonType
} from "./type";
import {Link} from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SizeMapping} from "@/ts/appMain/components/_ui/button/function";
import { tv } from "tailwind-variants";

const button = tv({
    base: "bg-mainGreen text-white py-2 px-4 rounded-xl hover:opacity-80",
    variants: {
        color: {
            mainGreen: "bg-mainGreen",
            mainYellow: "bg-mainYellow",
            danger: "bg-danger",
            info: "bg-info",
            success: "bg-success",
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
            size: 'md',
            color: 'mainGreen',
            width: 'none'
        },
    },
});

const AuthButton = (props: AuthButtonType) => {

    return (
        <button className={`
            w-full bg-green-500 text-white rounded-md py-2 mt-4
            hover:bg-green-600`
        }>
            {props.name}
        </button>
    );
};

const MoreButton = (props: MoreButtonType) => {
    return(
        <Link to={props.link} className="hover:opacity-80">
            <p className="flex items-center after:content-['>'] after:ml-2">
                もっと見る
            </p>
        </Link>
    )
}

const MainButton = (props: MainButtonType) => {
    return(
        <button type={props.type} className={button({width: props.width, size: props.size, color: props.color})} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

const IconButton = (props: IconButtonType) => {
    return(
        <button className={`bg-none ${SizeMapping[props.size]} hover:opacity-80`} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

const SubmitButton = (props: SubmitButtonType) => {
    let btnColor = 'bg-mainGreen'
    switch (props.color){
        case 'mainGreen':
            btnColor = 'bg-mainGreen'
            break;
        case 'mainYellow':
            btnColor = 'bg-mainYellow'
            break;
    }
    const btnType = typeof props.type === 'string' ? props.type : 'button';
    return(
        <input type={btnType} className={`w-1/2 ${btnColor} text-white rounded-2xl py-2 hover:opacity-80`} value={props.value}/>
    )
}

const FavoriteButton = (props: FavoriteButtonType) => {
    let btnColor = 'bg-pink-500'
    let btnBorderColor = 'border-pink-500'
    let textColor = 'text-white'
    let btnValue = 'お気に入りを解除'
    let heartElement = <FaHeart style={{ color:'white', fontSize: '1.2rem' }}/>

    if(!props.status){
        btnColor = 'bg-transparent'
        textColor = 'text-black'
        btnValue = 'お気に入り登録'
        heartElement = <FaRegHeart style={{ color:'rgb(236 72 153)', fontSize: '1.2rem' }}/>
    }

    const changeStatus = () => {
        props.setFavoriteStatus(!props.status)
    }

    return(
        <button className={`w-1/2 ${btnColor} ${btnBorderColor} border-solid border-2 ${textColor} rounded-2xl py-2 hover:opacity-80`} onClick={changeStatus}>
            <div className={'flex items-center justify-center'}>
                <span className={'mr-2'}>{btnValue}</span>{heartElement}
            </div>
        </button>
    )
}

export {
    AuthButton,
    MoreButton,
    MainButton,
    IconButton,
    SubmitButton,
    FavoriteButton,
};
