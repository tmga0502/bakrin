import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {applicationList} from "@/ts/_dummyData/ApplicationList";
import ItemPanel from "@/ts/appMain/components/_common/tradeItem/ItemPanel";

const TradeListFeatures = () => {
    return (
        <MainLayout>
            <PageTitle en={'TRADE'} jp={'取引一覧'}/>
            <Breadcrumb/>
            {applicationList.map((list:any, index:number)=>(
                <ItemPanel  link={''+list.id} itemName={list.itemName} producerName={list.producerName} thumbnail={list.thumbnail} date={list.date} status={1} key={index}/>
            ))}
        </MainLayout>
    );
};

export default TradeListFeatures;
