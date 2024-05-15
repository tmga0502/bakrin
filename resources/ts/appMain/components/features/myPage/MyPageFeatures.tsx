import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import List from "./components/List";

const mypageMenu = [
    {name:'お気に入り', link:'myfavorite'},
    {name:'交換履歴', link:'tradeHistory'},
    {name:'請求書', link:'invoice'},
    {name:'基本情報', link:'profile'},
    {name:'ログアウト', link:'/'},
]

const MyPageFeatures = () => {
    return (
        <MainLayout>
            <PageTitle en={'MY PAGE'} jp={'マイページ'}/>
            <Breadcrumb/>
            <div className="max-w-[500px] mx-auto">
                {mypageMenu.map((menu:{name:string, link:string}, index:number) => (
                    <List name={menu.name} link={menu.link} key={index}/>
                ))}
            </div>
        </MainLayout>
    );
};

export default MyPageFeatures;
