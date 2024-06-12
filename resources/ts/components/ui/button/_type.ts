import React from "react";

type MainButtonType = {
    value: string,
    color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success' | 'dark',
    type : 'button' | 'submit',
    size? : 'sm' | 'md' | 'lg' ,
    width? : 'full' | 'half',
    onClick?: any,
    disabled? : boolean,
}

type FavoriteButtonType = {
    value: string,
    status: boolean,
    type : 'button' | 'submit',
    size? : 'sm' | 'md' | 'lg' ,
    width? : 'full' | 'half',
    onClick?: any,
}

type SideMenuButtonType = {
	icon: React.ReactNode,
	title: string,
	link: string,
}

export {
    MainButtonType,
    FavoriteButtonType,
	SideMenuButtonType
}
