import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
    useDeregisterFavoriteItem,
    useRegisterFavoriteItem
} from "@/react/api/query/FavoriteItemQuery";
import {useAuth} from "@/react/app/mainApp//hooks/AuthContext";
import {ItemFavoriteButton, MainButton} from "@/react/app/mainApp/components/button";
import {ButtonGroupType} from "@/react/app/mainApp/pages/item/show/features/BttonGroup/ButtonGroup.type";

const ButtonGroup: React.FC<ButtonGroupType> = ({data}) => {
	const {userData} = useAuth();
    const [favoriteStatus, setFavoriteStatus] = useState(
		data.favorite_items.some((item:any) => item.myUuid === userData.uuid)
	)
    const favoriteRegister = useRegisterFavoriteItem();
    const favoriteDeregister = useDeregisterFavoriteItem();

    const handleFavorite = () => {
        if (favoriteStatus){
            favoriteDeregister.mutate({itemUuid:data.uuid})//解除処理
        }else{
            favoriteRegister.mutate({itemUuid:data.uuid})//登録処理
        }
        setFavoriteStatus(!favoriteStatus)
    }

    return (
        <>
            <div className="block text-center mt-8 mb-4">
				<Link to={`/items/${data.uuid}/requestForm`}>
                	<MainButton type={'button'} width={'half'} color={'mainGreen'} value={'申請する'}/>
				</Link>
            </div>

            <div className="block text-center mb-4">
                <Link to={`/message/${data.producer.uuid}`}>
                    <MainButton type={'button'} width={'half'} color={'mainYellow'} value={'メッセージを送る'}/>
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
