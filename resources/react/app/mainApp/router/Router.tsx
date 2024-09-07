import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useAuth} from "@/react/app/mainApp/hooks/AuthContext";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import Home from "@/react/app/mainApp/pages/home/Home";
import Contact from "@/react/app/mainApp/pages/Contact/Contact";
import Login from "@/react/app/mainApp/pages/Login/Login";
import InfoList from "@/react/app/mainApp/pages/Info/List/InfoList";
import InfoShow from "@/react/app/mainApp/pages/Info/Show/InfoShow";
import MyPageTop from "@/react/app/mainApp/pages/MyPage/Top/MyPageTop";
import MyPageFavorite from "@/react/app/mainApp/pages/MyPage/Favorite/MyPageFavorite";
import MyPageTradeHistory from "@/react/app/mainApp/pages/MyPage/TradeHistory/MyPageTradeHistory";
import MyPageInvoice from "@/react/app/mainApp/pages/MyPage/Invoice/MyPageInvoice";
import MyPageProfile from "@/react/app/mainApp/pages/MyPage/Profile/MyPageProfile";
import ItemShow from "@/react/app/mainApp/pages/Item/Show/ItemShow";
import ItemList from "@/react/app/mainApp/pages/Item/List/ItemList";
import ProducerShow from "@/react/app/mainApp/pages/Producer/Show/ProducerShow";
import ProducerList from "@/react/app/mainApp/pages/Producer/List/ProducerList";
import TradeList from "@/react/app/mainApp/pages/Trade/List/TradeList";
import TradeShow from "@/react/app/mainApp/pages/Trade/Show/TradeShow";
import ReceiveApplicationList from "@/react/app/mainApp/pages/ReceiveApplication/List/ReceiveApplicationList";
import ReceiveApplicationShow from "@/react/app/mainApp/pages/ReceiveApplication/Show/ReceiveApplicationShow";
import MyItemShow from "@/react/app/mainApp/pages/Myitem/Show/MyItemShow";
import MyItemList from "@/react/app/mainApp/pages/Myitem/List/MyItemList";
import MyItemEdit from "@/react/app/mainApp/pages/Myitem/Edit/MyItemEdit";
import MyItemNew from "@/react/app/mainApp/pages/Myitem/New/MyItemNew";
import SearchItemCategory from '@/react/app/mainApp/pages/Search/ItemCategory/SearchItemCategory';
import SearchProducer from "@/react/app/mainApp/pages/Search/Producer/SearchProducer";
import SearchPlan from "@/react/app/mainApp/pages/Search/Plan/SearchPlan";

const Router = () => {

	const { isAuth, isLoading } = useAuth();

	const GuardRoute = (props : {component: ReactElement}) => {
		if (isLoading) return <Loader/>; // 認証状態が確定するまでローディング表示
		if(!isAuth) return<Navigate to="/login" />
		return <>{ props.component }</>
	}

	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
};

export default Router;
