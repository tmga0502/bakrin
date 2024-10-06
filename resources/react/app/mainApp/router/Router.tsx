import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Loader from "@/react/app/mainApp/components/layout/Loader/Loader";
import Home from "@/react/app/mainApp/pages/home/Home";
import Contact from "@/react/app/mainApp/pages/contact/Contact";
import Login from "@/react/app/mainApp/pages/login/Login";
import InfoList from "@/react/app/mainApp/pages/Info/List/InfoList";
import InfoShow from "@/react/app/mainApp/pages/Info/Show/InfoShow";
import MyPageTop from "@/react/app/mainApp/pages/myPage/top/MyPageTop";
import MyPageFavorite from "@/react/app/mainApp/pages/myPage/favorite/MyPageFavorite";
import MyPageTradeHistory from "@/react/app/mainApp/pages/myPage/tradeHistory/MyPageTradeHistory";
import MyPageInvoice from "@/react/app/mainApp/pages/myPage/invoice/MyPageInvoice";
import MyPageProfile from "@/react/app/mainApp/pages/myPage/profile/MyPageProfile";
import ItemShow from "@/react/app/mainApp/pages/item/show/ItemShow";
import ItemList from "@/react/app/mainApp/pages/item/list/ItemList";
import ProducerShow from "@/react/app/mainApp/pages/producer/show/ProducerShow";
import ProducerList from "@/react/app/mainApp/pages/producer/list/ProducerList";
import TradeList from "@/react/app/mainApp/pages/trade/list/TradeList";
import TradeShow from "@/react/app/mainApp/pages/trade/show/TradeShow";
import ReceiveApplicationList from "@/react/app/mainApp/pages/receiveRequest/list/ReceiveRequestList";
import ReceiveApplicationShow from "@/react/app/mainApp/pages/receiveRequest/show/ReceiveRequestShow";
import MyItemShow from "@/react/app/mainApp/pages/myitem/show/MyItemShow";
import MyItemList from "@/react/app/mainApp/pages/myitem/list/MyItemList";
import MyItemEdit from "@/react/app/mainApp/pages/myitem/edit/MyItemEdit";
import MyItemNew from "@/react/app/mainApp/pages/myitem/new/MyItemNew";
import SearchItemCategory from '@/react/app/mainApp/pages/search/itemCategory/SearchItemCategory';
import SearchProducer from "@/react/app/mainApp/pages/search/producer/SearchProducer";
import SearchPlan from "@/react/app/mainApp/pages/search/plan/SearchPlan";
import ItemRequestForm from "@/react/app/mainApp/pages/item/requestForm/ItemRequestForm";
import MessageList from "@/react/app/mainApp/pages/message/list/MessageList";
import MessageShow from "@/react/app/mainApp/pages/message/show/MessageShow";
import {useRecoilValue} from "recoil";
import {IsAuthProducerStates} from "@/react/app/mainApp/states/AuthStates";
import ReceiveRequestListPage from "@/react/app/mainApp/pages/receiveRequest/list/ReceiveRequestList";
import ReceiveRequestShow from "@/react/app/mainApp/pages/receiveRequest/show/ReceiveRequestShow";

const Router = () => {

	const isAuth = useRecoilValue(IsAuthProducerStates);

	const GuardRoute = (props : {component: ReactElement}) => {
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
				{/*<Route path='/searchItemCategory' element={ <GuardRoute component={<SearchItemCategory />} /> } />*/}
				{/*<Route path='/searchProducer' element={ <GuardRoute component={<SearchProducer />} /> } />*/}
				{/*<Route path='/searchPlan' element={ <GuardRoute component={<SearchPlan />} /> } />*/}

				{/*/!* 商品関連 *!/*/}
				<Route path="/items">
					<Route index={true} element={  <GuardRoute component={<ItemList />} /> } />
					<Route path=":itemUuid" element={  <GuardRoute component={<ItemShow />} /> } />
					<Route path=":itemUuid/requestForm" element={  <GuardRoute component={<ItemRequestForm />} /> } />
				</Route>

				{/*/!* 生産者関連 *!/*/}
				<Route path="/producers">
					<Route index={true} element={  <GuardRoute component={<ProducerList />}/> } />
					<Route path=":producerId" element={  <GuardRoute component={<ProducerShow />} /> } />
				{/*	/!*<Route path=":producerId/message" element={  <GuardRoute component={<ProducerShow />}/> } />*!/*/}
				</Route>

				{/*/!* 商品管理 *!/*/}
				{/*<Route path="/myitem">*/}
				{/*	<Route index={true} element={<GuardRoute component={<MyItemList />}/> } />*/}
				{/*	<Route path="new" element={<GuardRoute component={<MyItemNew />}/> } />*/}
				{/*	<Route path=":itemUuid" element={<GuardRoute component={<MyItemShow />}/> } />*/}
				{/*	<Route path=":itemUuid/edit" element={<GuardRoute component={<MyItemEdit />}/> } />*/}
				{/*</Route>*/}

				{/*/!*  マイページ  *!/*/}
				<Route path="/mypage">
					<Route index={true} element={<GuardRoute component={<MyPageTop />}/> } />
					<Route path="myfavorite" element={<GuardRoute component={<MyPageFavorite />}/> } />{/* お気に入り */}
					<Route path="tradeHistory" element={<GuardRoute component={<MyPageTradeHistory />}/> } />{/* 交換履歴 */}
					<Route path="invoice" element={<GuardRoute component={<MyPageInvoice />}/> } />{/* 請求書 */}
					<Route path="profile" element={<GuardRoute component={<MyPageProfile />}/> } />{/* 基本情報 */}
				</Route>

				{/*/!*  申請依頼  *!/*/}
				<Route path="receiveRequest">
					<Route index={true} element={<GuardRoute component={<ReceiveRequestListPage />}/>}/>
					<Route path=":tradeUuid" element={<GuardRoute component={<ReceiveRequestShow />}/>}/>
				</Route>

				{/*/!*  取引  *!/*/}
				<Route path="trade">
					<Route index={true} element={<GuardRoute component={<TradeList />} />}/>
				{/*	<Route path=":tradeUuid" element={<GuardRoute component={<TradeShow />}/>}/>*/}
				</Route>

				{/*/!*  メッセージ  *!/*/}
				{/*<Route path="message">*/}
				{/*	<Route index={true} element={<GuardRoute component={<MessageList />} />}/>*/}
				{/*	<Route path=":producerUuid" element={<GuardRoute component={<MessageShow />} />}/>*/}
				{/*</Route>*/}

				{/*/!*  その他  *!/*/}
				<Route path="/contact" element={<GuardRoute component={<Contact />} /> } />{/* お問い合わせ */}
				<Route path="/info" element={<GuardRoute component={<InfoList />} /> } />{/* お知らせ一覧 */}
				<Route path="/info/:infoId" element={<GuardRoute component={<InfoShow />} />} />{/* お知らせ詳細 */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
