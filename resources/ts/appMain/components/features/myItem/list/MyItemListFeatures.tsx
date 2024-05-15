import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import ListItem from "@/ts/appMain/components/features/myItem/list/components/ListItem";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {Link} from "react-router-dom";

const MyItemListFeatures = () => {
    return (
        <MainLayout>
            <PageTitle en={'MY ITEM'} jp={'アイテム一覧'}/>
            <Breadcrumb/>

            <div className="text-right">
                <Link to={'new'}>
                    <MainButton value={'新規登録'} color={'danger'} type={'button'} size={'sm'}/>
                </Link>
            </div>

            <div className="my-4">
                <ListItem id={1} name={'トマト'} planNumber={1}/>
                <ListItem id={2} name={'野菜セット'} planNumber={2}/>
                <ListItem id={3} name={'きゅうり'} planNumber={3}/>
            </div>
        </MainLayout>
    );
};

export default MyItemListFeatures;
