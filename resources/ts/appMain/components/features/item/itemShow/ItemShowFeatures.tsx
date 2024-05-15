import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ItemShowImages from "@/ts/appMain/components/_common/ItemDescription/ItemShowImages";
import ItemShowDescription from "@/ts/appMain/components/_common/ItemDescription/ItemShowDescription";
import {useGetItem} from "@/ts/hooks/items/item/getItem";
import {useParams} from "react-router-dom";
import {useCurrentGetItem} from "@/ts/hooks/items/item/useCurrentGetItem";


const ItemShowFeatures = () => {
    const params = useParams()
    const { isLoading } = useGetItem(params.itemId);
    const item = useCurrentGetItem(params.itemId);

    if (isLoading){
        return('isLoading')
    }else if(!item){
        return('not found')
    } else{
        console.log(item)
        return (
            <MainLayout>
                <Breadcrumb/>
                <div className="grid gap-4 lg:grid-cols-2">
                    <ItemShowImages thumbnail={item.thumbnail} images={item.images}/>
                    <ItemShowDescription requestPageState={false} data={item}/>
                </div>
            </MainLayout>
        );
    }

};

export default ItemShowFeatures;
