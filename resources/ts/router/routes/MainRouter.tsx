import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "@/ts/appMain/components/pages/Login";
import Home from "@/ts/appMain/components/pages/Home";
import ItemList from "@/ts/appMain/components/pages/item/ItemList";
import ItemShow from "@/ts/appMain/components/pages/item/ItemShow";
import ProducerList from "@/ts/appMain/components/pages/poduct/ProducerList";
import ProducerShow from "@/ts/appMain/components/pages/poduct/ProducerShow";
import ItemRequest from "@/ts/appMain/components/pages/item/ItemRequest";
import Contact from "@/ts/appMain/components/pages/Contact";
import InfoShow from "@/ts/appMain/components/pages/info/InfoShow";
import InfoList from "@/ts/appMain/components/pages/info/InfoList";
import MyPage from "@/ts/appMain/components/pages/MyPage";
import MyFavoritePage from "@/ts/appMain/components/pages/myFavorite/MyFavoritePage";
import Profile from "@/ts/appMain/components/pages/profile/Profile";
import TradeHistory from "@/ts/appMain/components/pages/tradeHistory/TradeHistory";
import Invoice from "@/ts/appMain/components/pages/invoice/Invoice";
import ReceiveApplication from "@/ts/appMain/components/pages/receiveApplication/ReceiveApplication";
import ReceiveApplicationShow from "@/ts/appMain/components/pages/receiveApplication/ReceiveApplicationShow";
import TradeList from "@/ts/appMain/components/pages/trade/TradeList";
import TradeShow from "@/ts/appMain/components/pages/trade/TradeShow";
import MyItemList from "@/ts/appMain/components/pages/myitem/list/MyItemList";
import MyItemNewFeatures from "@/ts/appMain/components/features/myItem/new/MyItemNewFeatures";
import MyItemEditFeatures from "@/ts/appMain/components/features/myItem/edit/MyItemEditFeatures";
import GuardRoute from "@/ts/router/components/guardRoute/GuardRoute";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={  <Login /> } />

            {/* TOPページ */}
            <Route path={'/'} element={  <GuardRoute component={<Home />} /> } />

            {/* 商品関連 */}
            <Route path="/items">
                <Route index={true} element={  <GuardRoute component={<ItemList />} /> } />
                <Route path=":itemId" element={  <GuardRoute component={<ItemShow />} /> } />
                <Route path=":itemId/request" element={ <GuardRoute component={<ItemRequest />}/> } />
            </Route>

            {/* 生産者関連 */}
            <Route path="/producers">
                <Route index={true} element={  <GuardRoute component={<ProducerList />}/> } />
                <Route path=":producerId" element={  <GuardRoute component={<ProducerShow />} /> } />
                <Route path=":producerId/message" element={  <GuardRoute component={<ProducerShow />}/> } />
            </Route>

            {/* 商品管理 */}
            <Route path="/myitem">
                <Route index={true} element={<GuardRoute component={<MyItemList />}/> } />
                <Route path="new" element={<GuardRoute component={<MyItemNewFeatures />}/> } />
                <Route path="edit/:itemId" element={<GuardRoute component={<MyItemEditFeatures />}/> } />
            </Route>

            {/*  マイページ  */}
            <Route path="/mypage">
                <Route index={true} element={<GuardRoute component={<MyPage />}/> } />
                <Route path="myfavorite" element={<GuardRoute component={<MyFavoritePage />}/> } />{/* お気に入り */}
                <Route path="tradeHistory" element={<GuardRoute component={<TradeHistory />}/> } />{/* 交換履歴 */}
                <Route path="invoice" element={<GuardRoute component={<Invoice />}/> } />{/* 請求書 */}
                <Route path="profile" element={<GuardRoute component={<Profile />}/> } />{/* 基本情報 */}
            </Route>

            {/*  申請依頼  */}
            <Route path="receiveApplication">
                <Route index={true} element={<GuardRoute component={<ReceiveApplication />}/>}/>
                <Route path=":receiveId" element={<GuardRoute component={<ReceiveApplicationShow />}/>}/>
            </Route>

            {/*  取引  */}
            <Route path="trade">
                <Route index={true} element={<GuardRoute component={<TradeList />} />}/>
                <Route path=":tradeId" element={<GuardRoute component={<TradeShow />}/>}/>
            </Route>

            {/*  その他  */}
            <Route path="/contact" element={<GuardRoute component={<Contact />} /> } />{/* お問い合わせ */}
            <Route path="/info" element={<GuardRoute component={<InfoList />} /> } />{/* お知らせ一覧 */}
            <Route path="/info/:infoId" element={<GuardRoute component={<InfoShow />} />} />{/* お知らせ詳細 */}
        </Routes>
    );
};

export default MainRouter;
