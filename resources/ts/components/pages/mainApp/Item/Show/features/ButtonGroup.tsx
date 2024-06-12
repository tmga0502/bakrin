import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
    useDeregisterFavoriteItem,
    useRegisterFavoriteItem
} from "@/ts/_api/query/FavoriteItemQuery";
import {ItemType} from "@/ts/types/ItemType";
import {useAuth} from "@/ts/hooks/AuthContext";
import { useItemShowMode } from '../hooks/ItemContext';
import {ItemFavoriteButton, MainButton} from "@/ts/components/ui/button";

const ButtonGroup = (props:{data: ItemType}) => {
	const {userData} = useAuth();
    const [favoriteStatus, setFavoriteStatus] = useState(
		props.data.favorite_items.some((item:any) => item.myUuid === userData.uuid)
	)
    const favoriteRegister = useRegisterFavoriteItem();
    const favoriteDeregister = useDeregisterFavoriteItem();
    const {setMode} = useItemShowMode()

    const handleFavorite = () => {
        if (favoriteStatus){
            favoriteDeregister.mutate({itemUuid:props.data.uuid})//解除処理
        }else{
            favoriteRegister.mutate({itemUuid:props.data.uuid})//登録処理
        }
        setFavoriteStatus(!favoriteStatus)
    }

    return (
        <>
            <div className="block text-center mt-8 mb-4">
                <MainButton type={'button'} width={'half'} color={'mainGreen'} value={'申請する'} onClick={()=>setMode('request')}/>
            </div>

            <div className="block text-center mb-4">
                <Link to={'/'}>
                    <MainButton type={'button'} width={'half'} color={'mainYellow'} value={'交渉する'}/>
                </Link>
            </div>

            <div className="block text-center mb-8">
                {favoriteStatus ? (
                    <ItemFavoriteButton value={'登録解除'} status={true} type={'button'} width={'half'} onClick={handleFavorite}/>
                ) : (
                    <ItemFavoriteButton value={'登録する'} status={false} type={'button'} width={'half'} onClick={handleFavorite}/>
                )}
            </div>
        </>
    );
};

export default ButtonGroup;
