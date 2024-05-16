import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ItemShowImages from "@/ts/appMain/components/features/item/itemShow/container/ItemShowImages";
import ItemShowDescription from "@/ts/appMain/components/features/item/itemShow/container/ItemShowDescription";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import {ItemShowModeProvider} from "@/ts/appMain/components/features/item/itemShow/hooks/ItemContext";


const ItemShowFeatures = () => {
    const params = useParams()
    const { data: item, status: itemStatus} = useGetItem(params.itemUuid);

    if (itemStatus === 'loading'){
        return('isLoading')
    }else if(!item){
        return('not found')
    } else{
        return (
            <MainLayout>
                <Breadcrumb/>
                <ItemShowModeProvider>
                    <div className="grid gap-4 lg:grid-cols-2">
                        <ItemShowImages thumbnail={item.thumbnail} images={item.images}/>
                        <ItemShowDescription requestPageState={false} data={item}/>
                    </div>
                </ItemShowModeProvider>
            </MainLayout>
        );
    }

};

export default ItemShowFeatures;
