import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ItemShowImages from "@/ts/appMain/components/_common/ItemDescription/ItemShowImages";
import ItemShowDescription from "@/ts/appMain/components/_common/ItemDescription/ItemShowDescription";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import {useGetFavoriteItemState} from "@/ts/_api/query/FavoriteItemQuery";

const RequestItemFeatures = () => {
    const params = useParams()
    const { data: item, status: itemStatus} = useGetItem(params.itemId);
    const { data: favoriteItemState, status: favoriteItemStateStatus} = useGetFavoriteItemState(params.itemId)

    if (itemStatus === 'loading' || favoriteItemStateStatus === 'loading'){
        return('isLoading')
    }else if(!item || favoriteItemState === undefined){
        return('not found')
    } else {
        return (
            <MainLayout>
                <Breadcrumb/>
                <div className="grid gap-4 lg:grid-cols-2">
                    <ItemShowImages thumbnail={item.thumbnail} images={item.images}/>
                    <ItemShowDescription requestPageState={true} data={item} favoriteItemState={favoriteItemState}/>
                </div>
            </MainLayout>
        );
    }
};

export default RequestItemFeatures;
