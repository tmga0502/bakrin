import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import Form from "@/ts/appMain/components/features/myItem/new/component/Form";

const MyItemNewFeatures = () => {
    return (
        <MainLayout>
            <Breadcrumb/>

            <div className="max-w-[500px] mx-auto mb-48">
                <Form/>
            </div>
        </MainLayout>
    );
};

export default MyItemNewFeatures;
