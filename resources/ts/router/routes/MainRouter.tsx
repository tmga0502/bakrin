import React, {ReactElement} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useAuth} from "@/ts/hooks/AuthContext";
import Loader from "@/ts/components/ui/loader/Loader";
import Home from "@/ts/components/pages/mainApp/Home/Home";
import Contact from "@/ts/components/pages/mainApp/Contact/Contact";
import Login from "@/ts/components/pages/mainApp/Login/Login";
import InfoList from "@/ts/components/pages/mainApp/Info/List/InfoList";
import InfoShow from "@/ts/components/pages/mainApp/Info/Show/InfoShow";
import MyPageTop from "@/ts/components/pages/mainApp/MyPage/Top/MyPageTop";
import MyPageFavorite from "@/ts/components/pages/mainApp/MyPage/Favorite/MyPageFavorite";
import MyPageTradeHistory from "@/ts/components/pages/mainApp/MyPage/TradeHistory/MyPageTradeHistory";
import MyPageInvoice from "@/ts/components/pages/mainApp/MyPage/Invoice/MyPageInvoice";
import MyPageProfile from "@/ts/components/pages/mainApp/MyPage/Profile/MyPageProfile";
import ItemShow from "@/ts/components/pages/mainApp/Item/Show/ItemShow";
import ItemList from "@/ts/components/pages/mainApp/Item/List/ItemList";
import ProducerShow from "@/ts/components/pages/mainApp/Producer/Show/ProducerShow";
import ProducerList from "@/ts/components/pages/mainApp/Producer/List/ProducerList";
import TradeList from "@/ts/components/pages/mainApp/Trade/List/TradeList";
import TradeShow from "@/ts/components/pages/mainApp/Trade/Show/TradeShow";
import ReceiveApplicationList from "@/ts/components/pages/mainApp/ReceiveApplication/List/ReceiveApplicationList";
import ReceiveApplicationShow from "@/ts/components/pages/mainApp/ReceiveApplication/Show/ReceiveApplicationShow";
import MyItemShow from "@/ts/components/pages/mainApp/Myitem/Show/MyItemShow";
import MyItemList from "@/ts/components/pages/mainApp/Myitem/List/MyItemList";
import MyItemEdit from "@/ts/components/pages/mainApp/Myitem/Edit/MyItemEdit";
import MyItemNew from "@/ts/components/pages/mainApp/Myitem/New/MyItemNew";
import SearchItemCategory from '@/ts/components/pages/mainApp/Search/ItemCategory/SearchItemCategory';
import SearchProducer from "@/ts/components/pages/mainApp/Search/Producer/SearchProducer";
import SearchPlan from "@/ts/components/pages/mainApp/Search/Plan/SearchPlan";

const MainRouter = () => {

    const { isAuth, isLoading } = useAuth();

    const GuardRoute = (props : {component: ReactElement}) => {
        if (isLoading) return <Loader/>; // 認証状態が確定するまでローディング表示
        if(!isAuth) return<Navigate to="/login" />
        return <>{ props.component }</>
    }

    return (
        <Routes>
            <Route path="/login" element={  <Login /> } />

            {/* TOPページ */}
            <Route path={'/'} element={  <GuardRoute component={<Home />} /> } />

			{/*/!* 検索関連 *!/*/}
			<Route path='/searchItemCategory' element={ <GuardRoute component={<SearchItemCategory />} /> } />
			<Route path='/searchProducer' element={ <GuardRoute component={<SearchProducer />} /> } />
			<Route path='/searchPlan' element={ <GuardRoute component={<SearchPlan />} /> } />

            {/*/!* 商品関連 *!/*/}
            <Route path="/items">
                <Route index={true} element={  <GuardRoute component={<ItemList />} /> } />
                <Route path=":itemUuid" element={  <GuardRoute component={<ItemShow />} /> } />
            </Route>

            {/*/!* 生産者関連 *!/*/}
            <Route path="/producers">
                <Route index={true} element={  <GuardRoute component={<ProducerList />}/> } />
                <Route path=":producerId" element={  <GuardRoute component={<ProducerShow />} /> } />
                {/*<Route path=":producerId/message" element={  <GuardRoute component={<ProducerShow />}/> } />*/}
		    </Route>

            {/*/!* 商品管理 *!/*/}
            <Route path="/myitem">
                <Route index={true} element={<GuardRoute component={<MyItemList />}/> } />
                <Route path="new" element={<GuardRoute component={<MyItemNew />}/> } />
                <Route path=":itemUuid" element={<GuardRoute component={<MyItemShow />}/> } />
                <Route path=":itemUuid/edit" element={<GuardRoute component={<MyItemEdit />}/> } />
            </Route>

            {/*/!*  マイページ  *!/*/}
            <Route path="/mypage">
                <Route index={true} element={<GuardRoute component={<MyPageTop />}/> } />
                <Route path="myfavorite" element={<GuardRoute component={<MyPageFavorite />}/> } />{/* お気に入り */}
                <Route path="tradeHistory" element={<GuardRoute component={<MyPageTradeHistory />}/> } />{/* 交換履歴 */}
                <Route path="invoice" element={<GuardRoute component={<MyPageInvoice />}/> } />{/* 請求書 */}
                <Route path="profile" element={<GuardRoute component={<MyPageProfile />}/> } />{/* 基本情報 */}
            </Route>

            {/*/!*  申請依頼  *!/*/}
            <Route path="receiveApplication">
                <Route index={true} element={<GuardRoute component={<ReceiveApplicationList />}/>}/>
                <Route path=":receiveId" element={<GuardRoute component={<ReceiveApplicationShow />}/>}/>
            </Route>

            {/*/!*  取引  *!/*/}
            <Route path="trade">
                <Route index={true} element={<GuardRoute component={<TradeList />} />}/>
                <Route path=":tradeId" element={<GuardRoute component={<TradeShow />}/>}/>
            </Route>

            {/*/!*  その他  *!/*/}
            <Route path="/contact" element={<GuardRoute component={<Contact />} /> } />{/* お問い合わせ */}
            <Route path="/info" element={<GuardRoute component={<InfoList />} /> } />{/* お知らせ一覧 */}
            <Route path="/info/:infoId" element={<GuardRoute component={<InfoShow />} />} />{/* お知らせ詳細 */}
        </Routes>
    );
};

export default MainRouter;
