import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Data from "@/ts/appMain/components/features/myPage/profile/components/Data";
import Password from "@/ts/appMain/components/features/myPage/profile/components/Password";
import PaymentMethod from "@/ts/appMain/components/features/myPage/profile/components/PaymentMethod";
import {useGetUser} from "@/ts/_api/query/AuthQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";

const ProfileFeature = () => {

    const { data, status} = useGetUser();
    if(status === 'success'){
        return (
            <MainLayout>
                <PageTitle en={'PROFILE'} jp={'基本情報'}/>
                <Breadcrumb/>
                <div className="max-w-[500px] mx-auto">
                    <Data data={data}/>
                    <Password/>
                    <PaymentMethod data={data}/>
                </div>
            </MainLayout>
        );
    }else{
        return <Loader/>
    }
};

export default ProfileFeature;
