import React, {useState} from 'react';
import ButtonGroup from "@/ts/appMain/components/_common/ItemDescription/ButtonGroup";
import RequestForm from "@/ts/appMain/components/_common/ItemDescription/RequestForm";
import {ItemType} from "@/ts/types/ItemType";
import {Plan} from "@/ts/_constants/Plan";

type ItemShowDescriptionProps ={
    data            : ItemType,
    requestPageState: boolean,
}

const ItemShowDescription = (props:ItemShowDescriptionProps) => {
    const [favoriteStatus, setFavoriteStatus] = useState(false)
    const plan = Plan.find(plan => plan.number === props.data.planId)
    const planName = plan ? plan.name : '';
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
                        <ButtonGroup favoriteStatus={favoriteStatus} setFavoriteStatus={setFavoriteStatus}/>

                        <div className="p-4 border-2 bg-white flex items-center gap-6">
                            <div className="w-[64px] h-[64px]">
                                <img src={props.data.producer.imgPath} className="w-full h-full object-cover rounded-full" alt={props.data.producer.organizationName}/>
                            </div>
                            <div className="">
                                <p className="tex-xs mb-2">{props.data.producer.address1 + props.data.producer.address2}</p>
                                <p >{props.data.producer.organizationName}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemShowDescription;
