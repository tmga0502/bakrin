import React from 'react';
import RequestForm from "@/ts/appMain/components/features/item/itemShow/container/RequestForm";
import {ItemType} from "@/ts/types/ItemType";
import {Plan} from "@/ts/_constants/Plan";
import ButtonGroup from "@/ts/appMain/components/features/item/itemShow/container/ButtonGroup";
import {useItemShowMode} from "@/ts/appMain/components/features/item/itemShow/hooks/ItemContext";
import ProducerPanel from "@/ts/appMain/components/features/item/itemShow/container/ProducerPanel";

type ItemShowDescriptionProps ={
    data             : ItemType,
    requestPageState : boolean,
}

const ItemShowDescription = (props:ItemShowDescriptionProps) => {
    const {mode} = useItemShowMode()
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

                {mode === 'view' ? (
                    <>
                        <ButtonGroup　data={props.data}/>
                        <ProducerPanel data={props.data}/>
                    </>
                ):(
                    <RequestForm />
                )}
            </div>
        </div>
    );
};

export default ItemShowDescription;
