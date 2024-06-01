import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import ListItem from "@/ts/appMain/components/features/myItem/list/components/ListItem";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {Link} from "react-router-dom";
import {useGetMyItems} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";

const MyItemListFeatures = () => {

    const { data, status } = useGetMyItems();

    if (status === 'success'){
        console.log(data);
        return (
            <MainLayout>
                <PageTitle en={'MY ITEM'} jp={'アイテム一覧'}/>
                <Breadcrumb/>

                <div className="text-right">
                    <Link to={'new'} className="inline-block">
                        <MainButton value={'新規登録'} color={'danger'} type={'button'} size={'sm'}/>
                    </Link>
                </div>

                <div className="my-4">
                    {data.map(item => (
                        <ListItem key={item.id} data={item}/>
                    ))}
                </div>
            </MainLayout>
        );
    }else{
        return <Loader/>
    }
};

export default MyItemListFeatures;
