import React from 'react';
import {ListType} from "@/ts/appMain/components/features/home/container/homeProductLlist/type";
import {CategoryTitle} from "@/ts/appMain/components/_ui/title/Title";
import {MoreButton} from "@/ts/appMain/components/_ui/button/Button";
import {ItemListPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {ItemType} from "@/ts/types/ItemType";

const HomeProductList = (props: ListType) => {
    console.log(props.data.length)
    if (props.data.length > 0){
        return (
            <div className="mb-14">
                <div className="flex justify-between mb-3">
                    <CategoryTitle title={props.title}/>
                    <MoreButton link={props.moreLink}/>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {props.data.slice(0, 6).map((item: ItemType) =>(
                        <ItemListPanel src={item.thumbnail} alt={item.name} planNumber={item.planId} link={'items/'+item.id} key={item.id}/>
                    ))}
                </div>
            </div>
        );
    }else{
        return null
    }
};

export default HomeProductList;
