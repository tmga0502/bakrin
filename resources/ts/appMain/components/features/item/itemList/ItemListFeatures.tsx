import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ItemList from "@/ts/appMain/components/features/item/itemList/container/itemList/ItemList";

const ItemListFeatures = () => {
    return (
        <MainLayout>
            <PageTitle en={'ITEMS'} jp={'アイテム一覧'}/>
            <Breadcrumb/>
            <ItemList />
        </MainLayout>
    );
};

export default ItemListFeatures;
