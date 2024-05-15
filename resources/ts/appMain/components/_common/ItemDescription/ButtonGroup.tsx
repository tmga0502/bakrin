import React from 'react';
import {FavoriteButton, MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {Link} from "react-router-dom";

type ButtonGroupProps = {
    favoriteStatus: boolean,
    setFavoriteStatus: React.Dispatch<React.SetStateAction<boolean>>,
}

const ButtonGroup = (props: ButtonGroupProps) => {
    return (
        <>
            <div className="block text-center mt-8 mb-4">
                <Link to={'/items/1/request'}>
                    <MainButton type={'button'} width={'half'} color={'mainGreen'} value={'申請する'}/>
                </Link>
            </div>

            <div className="block text-center mb-4">
                <Link to={'/'}>
                    <MainButton type={'button'} width={'half'} color={'mainYellow'} value={'交渉する'}/>
                </Link>
            </div>

            <div className="block text-center mb-8">
                <FavoriteButton status={props.favoriteStatus} setFavoriteStatus={props.setFavoriteStatus}/>
            </div>
        </>
    );
};

export default ButtonGroup;
