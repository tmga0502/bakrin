import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {Link, useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";
import {ShowTd} from "@/ts/appMain/components/_ui/table/ShowTable";
import ItemShowImages from "@/ts/appMain/components/features/myItem/show/components/ItemShowImages";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";

const MyItemShowFeatures = () => {
    const params = useParams()
    const {data, status} = useGetItem(params.itemUuid)

    if(status === 'success'){
        const status = data.status === 0 ? '公開' : '非公開';
        return (
            <MainLayout>
                <PageTitle en={'MY ITEM SHOW'} jp={'アイテム詳細'}/>
                <Breadcrumb/>
                <div className="max-w-[500px] mx-auto">
                    <ItemShowImages thumbnail={data.thumbnail} images={data.images}/>
                    <table className={'w-full'}>
                        <tbody>
                        <ShowTd title={'カテゴリー'} data={data.category.name}/>
                        <ShowTd title={'アイテム名'} data={data.name}/>
                        <ShowTd title={'数量'} data={data.count + data.unit.name}/>
                        <ShowTd title={'目安数量'} data={data.guideCount + data.guide_unit.name}/>
                        <ShowTd title={'プラン'} data={data.plan.name}/>
                        <ShowTd title={'アイテム説明'} data={data.description}/>
                        <ShowTd title={'発送可能日'} data={`${data.shippingStart}月${data.shippingStartPart}から${data.shippingEnd}月${data.shippingEndPart}`}/>
                        <ShowTd title={'ステータス'} data={status}/>
                        </tbody>
                    </table>
                    <div className={'text-center mt-6'}>
                        <Link to={'edit'}>
                            <MainButton value={'編集'} width={'half'} color={'success'} type={'button'}/>
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    } else {
        return (<Loader/>)
    }
};

export default MyItemShowFeatures;
