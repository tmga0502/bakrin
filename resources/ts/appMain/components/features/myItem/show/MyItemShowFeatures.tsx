import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {Link, useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";
import {ShowTd} from "@/ts/appMain/components/_ui/table/ShowTable";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import ImageDeleteModal from "@/ts/appMain/components/features/myItem/show/components/ImageDeleteModal";
import DataDeleteModal from "@/ts/appMain/components/features/myItem/show/components/DataDeleteModal";
import AddImageModal from "@/ts/appMain/components/features/myItem/show/components/AddImageModal";


const MyItemShowFeatures = () => {
    const params = useParams()
    const {data, status} = useGetItem(params.itemUuid)

    if (status === 'success') {
        const status = data.status === 0 ? '公開' : '非公開';
        console.log(data);
        return (
            <MainLayout>
                <PageTitle en={'MY ITEM SHOW'} jp={'アイテム詳細'}/>
                <Breadcrumb/>
                <div className="max-w-[500px] mx-auto">
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
                        <ShowTd title={'サムネイル'} data={<img src={data.thumbnail} className={'w-1/2'} alt={'thumbnail'}/> }/>
                        {data.images.map((image, index) => (
                            <ShowTd title={`画像${index+1}`} key={image.id}  data={
                                <div className={'flex items-center gap-4'}>
                                    <img src={image.path} className={'w-1/2'} alt={`image${index+1}`}/>
                                    <ImageDeleteModal imageId={image.id}/>
                                </div>
                            }　/>
                        ))}
                        </tbody>
                    </table>
                    <div className={'md:flex md:items-center text-center gap-6 mt-6'}>
                        <AddImageModal dateId={data.id}/>
                        <Link to={'edit'} className={'block w-full mb-6'}>
                            <MainButton value={'編集'} width={'full'} color={'success'} type={'button'}/>
                        </Link>
                        <DataDeleteModal dateId={data.id}/>
                    </div>
                </div>
            </MainLayout>
        );
    } else {
        return (<Loader/>)
    }
};

export default MyItemShowFeatures;
