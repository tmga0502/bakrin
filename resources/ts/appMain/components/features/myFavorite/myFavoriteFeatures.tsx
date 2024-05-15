import React, {useState} from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Items from "@/ts/appMain/components/features/myFavorite/components/Items";
import Producers from "@/ts/appMain/components/features/myFavorite/components/Producers";
import Tabs from "@/ts/appMain/components/features/myFavorite/components/Tabs";

const MyFavoriteFeatures = () => {
    const [viewMode, setViewMode] = useState(true)
    return (
        <MainLayout>
            <PageTitle en={'MY FAVORITE'} jp={'お気に入り'}/>
            <Breadcrumb/>
            <Tabs mode={viewMode} setMode={setViewMode}/>
            {viewMode ? (
                <Items/>
            ) : (
                <Producers/>
            )}
        </MainLayout>
    );
};

export default MyFavoriteFeatures;
