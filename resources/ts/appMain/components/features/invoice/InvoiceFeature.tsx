import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import List from "@/ts/appMain/components/features/invoice/components/List";

const DateObject = [
    '2024年4月分', '2024年3月分',
]

const InvoiceFeature = () => {
    return (
        <MainLayout>
            <PageTitle en={'ITEMS'} jp={'アイテム一覧'}/>
            <Breadcrumb/>
            <div className="max-w-[500px] mx-auto">
                {DateObject.map((date:string, index:number) => (
                    <List date={date}/>
                ))}
            </div>
        </MainLayout>
    );
};

export default InvoiceFeature;
