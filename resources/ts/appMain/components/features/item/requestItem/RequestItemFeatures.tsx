import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ItemShowImages from "@/ts/appMain/components/_common/ItemDescription/ItemShowImages";
import ItemShowDescription from "@/ts/appMain/components/_common/ItemDescription/ItemShowDescription";

const RequestItemFeatures = () => {
    return (
        <MainLayout>
            <Breadcrumb/>
            <div className="grid gap-4 lg:grid-cols-2">
                <ItemShowImages/>
                <ItemShowDescription requestPageState={true}/>
            </div>
        </MainLayout>
    );
};

export default RequestItemFeatures;
