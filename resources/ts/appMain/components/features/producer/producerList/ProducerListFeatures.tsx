import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ItemList from "@/ts/appMain/components/features/producer/producerList/container/producerList/ProducerList";

const ProducerListFeatures = () => {
    return (
        <MainLayout>
            <PageTitle en={'PRODUCERS'} jp={'生産者一覧'}/>
            <Breadcrumb/>
            <ItemList />
        </MainLayout>
    );
};

export default ProducerListFeatures;
