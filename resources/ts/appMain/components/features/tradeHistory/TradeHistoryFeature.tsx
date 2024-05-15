import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import List from "@/ts/appMain/components/features/tradeHistory/components/List";

const historyData = [
    {
        date: '2024年4月',
        histories: [
            {
                itemName:'トマト',
                producerName: '〇〇農園',
                thumbnail: 'https://placehold.jp/400x230.png'
            },
            {
                itemName:'鮭',
                producerName: 'xx水産',
                thumbnail: 'https://placehold.jp/400x230.png'
            },
        ]
    },
    {
        date: '2024年3月',
        histories: [
            {
                itemName:'きゅうり',
                producerName: '〇〇農園',
                thumbnail: 'https://placehold.jp/400x230.png'
            },
            {
                itemName:'ひらめ',
                producerName: 'xx水産',
                thumbnail: 'https://placehold.jp/400x230.png'
            },
        ]
    },
]

const TradeHistoryFeature = () => {
    return (
        <MainLayout>
            <PageTitle en={'HISTORY'} jp={'交換履歴'}/>
            <Breadcrumb/>
            {historyData.map((data, index)=>(
                <List data={data} key={index}/>
            ))}
        </MainLayout>
    );
};

export default TradeHistoryFeature;
