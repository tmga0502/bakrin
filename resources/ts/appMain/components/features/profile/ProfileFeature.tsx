import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Data from "@/ts/appMain/components/features/profile/components/Data";
import Password from "@/ts/appMain/components/features/profile/components/Password";
import PaymentMethod from "@/ts/appMain/components/features/profile/components/PaymentMethod";

const ProfileFeature = () => {
    return (
        <MainLayout>
            <PageTitle en={'PROFILE'} jp={'基本情報'}/>
            <Breadcrumb/>
            <div className="max-w-[500px] mx-auto">
                <Data/>
                <Password/>
                <PaymentMethod/>
            </div>
        </MainLayout>
    );
};

export default ProfileFeature;
