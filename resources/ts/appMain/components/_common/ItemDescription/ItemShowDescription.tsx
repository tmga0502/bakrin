import React, {useState} from 'react';
import RequestForm from "@/ts/appMain/components/_common/ItemDescription/RequestForm";
import {ItemType} from "@/ts/types/ItemType";
import {Plan} from "@/ts/_constants/Plan";
import {Link} from "react-router-dom";
import {ItemFavoriteButton, MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {useDeregisterFavoriteItem, useRegisterFavoriteItem} from "@/ts/_api/query/FavoriteItemQuery";

type ItemShowDescriptionProps ={
    data             : ItemType,
    favoriteItemState: boolean,
    requestPageState : boolean,
}

const ItemShowDescription = (props:ItemShowDescriptionProps) => {
    const [favoriteStatus, setFavoriteStatus] = useState(props.favoriteItemState)
    const favoriteRegister = useRegisterFavoriteItem();
    const favoriteDeregister = useDeregisterFavoriteItem();
    const plan = Plan.find(plan => plan.number === props.data.planId)
    const planName = plan ? plan.name : '';


    const handleFavorite = () => {
        if (favoriteStatus){
            favoriteDeregister.mutate({itemUuid:props.data.uuid})//解除処理
        }else{
            favoriteRegister.mutate({itemUuid:props.data.uuid})//登録処理
        }
        setFavoriteStatus(!favoriteStatus)
    }

    return (
        <div>
            <div className="text-2xl">{props.data.name}</div>
            <div className="p-8">
                <p className="leading-10">{planName}</p>
                <p className="leading-10">{`数量：${props.data.count}${props.data.unit.name}`}</p>
                <p className="text-red-500 leading-10">{`数量目安：${props.data.guideCount}${props.data.guide_unit.name}`}</p>

                <div className="mt-10 leading-8">
                    {props.data.description}
                </div>

                {props.requestPageState ? (
                    <RequestForm />
                ):(
                    <>
                        <div className="block text-center mt-8 mb-4">
                            <Link to={`/items/${props.data.id}/request`}>
                                <MainButton type={'button'} width={'half'} color={'mainGreen'} value={'申請する'}/>
                            </Link>
                        </div>

                        <div className="block text-center mb-4">
                            <Link to={'/'}>
                                <MainButton type={'button'} width={'half'} color={'mainYellow'} value={'交渉する'}/>
                            </Link>
                        </div>

                        <div className="block text-center mb-8">
                            {favoriteStatus ? (
                                <ItemFavoriteButton value={'登録解除'} status={true} type={'button'} onClick={handleFavorite}/>
                            ):(
                                <ItemFavoriteButton value={'登録する'} status={false} type={'button'} onClick={handleFavorite}/>
                            )}
                        </div>

                        <div className="p-4 border-2 bg-white flex items-center gap-6">
                            <div className="w-[64px] h-[64px]">
                                <img src={props.data.producer.imgPath}
                                     className="w-full h-full object-cover rounded-full"
                                     alt={props.data.producer.organizationName}/>
                            </div>
                            <div className="">
                                <p className="tex-xs mb-2">{props.data.producer.address1 + props.data.producer.address2}</p>
                                <p>{props.data.producer.organizationName}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemShowDescription;
