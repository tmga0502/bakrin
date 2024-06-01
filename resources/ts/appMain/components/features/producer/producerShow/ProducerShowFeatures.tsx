import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {ItemListPanel, ProducerShowPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";


const ProducerShowFeatures = () => {
    return (
        <MainLayout>
            <Breadcrumb/>
            <ProducerShowPanel img={'https://picsum.photos/id/1019/1000/600/'} name={'テスト農園'} address={'東京都~~'}/>
            <div className="my-8 p-4 border-t-2 border-b-2">
                自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。
                自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。自己紹介文。
            </div>

            <PageTitle en={'ITEMS'} jp={'出品中の商品'}/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={1} link={'/items/1'}/>
                <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={2} link={'/items/2'}/>
                <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={3} link={'/items/3'}/>
                <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={2} link={'/items/4'}/>
            </div>
        </MainLayout>
);
};

export default ProducerShowFeatures;
