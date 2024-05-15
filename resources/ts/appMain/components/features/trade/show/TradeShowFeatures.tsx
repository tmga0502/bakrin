import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {PanelType} from "@/ts/appMain/components/_common/tradeItem/ItemPanel";
import TradeImageBox from "@/ts/appMain/components/_common/tradeItem/tradeImageBox";
import Chat from "@/ts/appMain/components/_common/tradeItem/Chat";

const TradeShowFeatures = (props:PanelType) => {

    // let component =

    return (
        <MainLayout>
            <Breadcrumb/>
            <PageTitle en={'Trade'} jp={'取引詳細'}/>

            <div className="grid lg:grid-cols-2">
                <div className="grid-item">
                    <TradeImageBox/>
                </div>
                <div className="grid-item">
                    <Chat/>
                </div>
            </div>

        </MainLayout>
    );
};

export default TradeShowFeatures;
