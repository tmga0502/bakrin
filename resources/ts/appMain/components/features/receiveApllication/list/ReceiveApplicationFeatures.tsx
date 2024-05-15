import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import ItemPanel from "@/ts/appMain/components/_common/tradeItem/ItemPanel";
import {applicationList} from "@/ts/_dummyData/ApplicationList";

const ReceiveApplicationFeatures = () => {
    return (
        <MainLayout>
            <PageTitle en={'RECEIVE APPLICATION'} jp={'申請依頼'}/>
            <Breadcrumb/>
            {applicationList.map((list:any, index:number)=>(
                <ItemPanel  link={''+list.id} itemName={list.itemName} producerName={list.producerName} thumbnail={list.thumbnail} date={list.date} key={index}/>
            ))}
        </MainLayout>
    );
};

export default ReceiveApplicationFeatures;
