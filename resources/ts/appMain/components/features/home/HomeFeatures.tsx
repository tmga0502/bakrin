import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import HomeProductRow from "@/ts/appMain/components/features/home/container/HomeProductRow";
import HomeProductTitle from "@/ts/appMain/components/features/home/container/HomeProductTitle";
import HomeProductGrid from "@/ts/appMain/components/features/home/container/HomeProductGrid";
import {ItemType} from "@/ts/types/ItemType";
import {ItemListPanel, ProducerPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {ProducerType} from "@/ts/types/ProducerType";
import {
    useGetFavoriteItems,
    useGetNewArrivalItems,
    useGetSeasonItems,
    useGetWantItems
} from "@/ts/_api/query/ItemQuery";
import {useGetPopularProducers} from "@/ts/_api/query/ProducerQuery";

const HomeFeatures = () => {
    //新着アイテム
    const { data: newArrivalItems, status:newArrivalStatus } = useGetNewArrivalItems();
    //欲しいものリスト
    const { data: wantItems, status:wantStatus } = useGetWantItems();
    //旬のアイテム
    const { data: seasonItems, status:seasonStatus } = useGetSeasonItems();
    //マイリスト(お気に入り登録済みリスト)
    const { data: favoriteItems, status:favoriteStatus } = useGetFavoriteItems();
    // //人気のユーザー
    const { data: popularProducers, status:popularStatus } = useGetPopularProducers();

    if(
        newArrivalStatus === 'loading' ||
        wantStatus === 'loading' ||
        seasonStatus === 'loading' ||
        favoriteStatus === 'loading' ||
        popularStatus === 'loading'
    ) {
        return 'Now Loading.......';
    }else{
        return(
            <MainLayout>
                <HomeProductRow>
                    <HomeProductTitle title={'新着'} moreLink={'/item'}/>
                    <HomeProductGrid>
                        {newArrivalItems && newArrivalItems.slice(0, 6).map((item: ItemType) =>(
                            <ItemListPanel data={item} key={item.id}/>
                        ))}
                    </HomeProductGrid>
                </HomeProductRow>

                <HomeProductRow>
                    <HomeProductTitle title={'欲しいものリスト'} moreLink={'/item'}/>
                    <HomeProductGrid>
                        {wantItems && wantItems.slice(0, 6).map((item: ItemType) =>(
                            <ItemListPanel data={item} key={item.id}/>
                        ))}
                    </HomeProductGrid>
                </HomeProductRow>

                <HomeProductRow>
                    <HomeProductTitle title={'今が旬'} moreLink={'/item'}/>
                    <HomeProductGrid>
                        {seasonItems && seasonItems.slice(0, 6).map((item: ItemType) =>(
                            <ItemListPanel data={item} key={item.id}/>
                        ))}
                    </HomeProductGrid>
                </HomeProductRow>

                <HomeProductRow>
                    <HomeProductTitle title={'お気に入りリスト'} moreLink={'/item'}/>
                    <HomeProductGrid>
                        {favoriteItems && favoriteItems.slice(0, 6).map((item: ItemType) =>(
                            <ItemListPanel data={item} key={item.id}/>
                        ))}
                    </HomeProductGrid>
                </HomeProductRow>

                <HomeProductRow>
                    <HomeProductTitle title={'注目ユーザー'} moreLink={'/item'}/>
                    <HomeProductGrid>
                        {popularProducers && popularProducers.slice(0, 6).map((producer:ProducerType) =>(
                            <ProducerPanel data={producer} key={producer.id}/>
                        ))}
                    </HomeProductGrid>
                </HomeProductRow>

            </MainLayout>
        );
    }

};

export default HomeFeatures;
