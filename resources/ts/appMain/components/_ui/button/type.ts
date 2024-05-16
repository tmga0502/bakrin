import {ReactNode} from "react";

type AuthButtonType = {
    name: string
}

type MoreButtonType = {
    link: string,
}

type MainButtonType = {
    value: string,
    color: 'mainGreen' | 'mainYellow' | 'danger' | 'info' | 'success',
    type : 'button' | 'submit',
    size? : 'sm' | 'md' | 'lg' ,
    width? : 'full' | 'half',
    onClick?: any,
}

type IconButtonType = {
    value: ReactNode,
    size : 'sm' | 'md' | 'lg' ,
    onClick?: any,
}

type SubmitButtonType = {
    value: string,
    color?: string | undefined,
    type? :string | undefined,
}

type FavoriteButtonType = {
    value: string,
    status: boolean,
    type : 'button' | 'submit',
    size? : 'sm' | 'md' | 'lg' ,
    width? : 'full' | 'half',
    onClick?: any,
}


export {
    AuthButtonType,
    MoreButtonType,
    MainButtonType,
    IconButtonType,
    SubmitButtonType,
    FavoriteButtonType,
}
