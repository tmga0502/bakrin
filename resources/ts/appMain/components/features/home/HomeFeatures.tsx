import React from 'react';
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {useGetArrivalItems} from "@/ts/hooks/items/newArraival/getNewArrivalItems";
import {useCurrentGetNewArrivalItems} from "@/ts/hooks/items/newArraival/useCurrentGetNewArrivalItems";
import {useGetSeasonItems} from "@/ts/hooks/items/season/getSeasonItems";
import {useCurrentGetSeasonItems} from "@/ts/hooks/items/season/useCurrentGetSeasonItems";
import {useGetFavoriteItems} from "@/ts/hooks/items/favorite/getFavoriteItems";
import {useCurrentGetFavoriteItems} from "@/ts/hooks/items/favorite/useCurrentGetFavoriteItems";
import {useGetWantItems} from "@/ts/hooks/items/wantItem/getWantItems";
import {useCurrentGetWantItems} from "@/ts/hooks/items/wantItem/useCurrentGetWantItems";
import {useGetPopularProducers} from "@/ts/hooks/producers/popular /getPopularProducers";
import {useCurrentGetPopularProducers} from "@/ts/hooks/producers/popular /useCurrentGetPopularProducers";
import HomeProductRow from "@/ts/appMain/components/features/home/container/HomeProductRow";
import HomeProductTitle from "@/ts/appMain/components/features/home/container/HomeProductTitle";
import HomeProductGrid from "@/ts/appMain/components/features/home/container/HomeProductGrid";
import {ItemType} from "@/ts/types/ItemType";
import {ItemListPanel, ProducerPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {ProducerType} from "@/ts/types/ProducerType";

const HomeFeatures = () => {
    //新着アイテム
    const { isLoading: arrivalLoading } = useGetArrivalItems();
    const newArrivalItems = useCurrentGetNewArrivalItems();

    //欲しいものリスト
    const { isLoading: wantLoading } = useGetWantItems();
    const wantItems = useCurrentGetWantItems();

    //旬のアイテム
    const { isLoading: seasonLoading } = useGetSeasonItems();
    const seasonItems = useCurrentGetSeasonItems();

    //マイリスト(お気に入り登録済みリスト)
    const { isLoading: favoriteLoading } = useGetFavoriteItems();
    const favoriteItems = useCurrentGetFavoriteItems();

    //人気のユーザー
    const { isLoading: popularLoading } = useGetPopularProducers();
    const popularProducers = useCurrentGetPopularProducers();

    if(arrivalLoading || wantLoading || seasonLoading || favoriteLoading || popularLoading) {
        return 'Now Loading.......';
    }else{
        return (
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

                {/*<HomeProductList title={'注目ユーザー'} moreLink={'/'}/>*/}
            </MainLayout>
        );
    }

};

export default HomeFeatures;
