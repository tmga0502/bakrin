import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "@/react/app/mainApp/pages/home/Home";
import Contact from "@/react/app/mainApp/pages/contact/Contact";
import Login from "@/react/app/mainApp/pages/login/Login";
import TopicsListPage from "@/react/app/mainApp/pages/topics/list/TopicsListPage";
import TopicsShowPage from "@/react/app/mainApp/pages/topics/show/TopicsShowPage";
import MyPageTop from "@/react/app/mainApp/pages/myPage/top/MyPageTopPage";
import MyPageFavoritePage from "@/react/app/mainApp/pages/myPage/favorite/MyPageFavoritePage";
import MyPageTradeHistoryPage from "@/react/app/mainApp/pages/myPage/tradeHistory/MyPageTradeHistoryPage";
import MyPageInvoicePage from "@/react/app/mainApp/pages/myPage/invoice/MyPageInvoicePage";
import MyPageProfilePage from "@/react/app/mainApp/pages/myPage/profile/MyPageProfilePage";
import ItemShowPage from "@/react/app/mainApp/pages/item/show/ItemShowPage";
import ItemList from "@/react/app/mainApp/pages/item/list/ItemListPage";
import ProducerShow from "@/react/app/mainApp/pages/producer/show/ProducerShowPage";
import ProducerList from "@/react/app/mainApp/pages/producer/list/ProducerListPage";
import TradeList from "@/react/app/mainApp/pages/trade/list/TradeListPage";
import TradeShow from "@/react/app/mainApp/pages/trade/show/TradeShowPage";
import MyItemShow from "@/react/app/mainApp/pages/myitem/show/MyItemShowPage";
import MyItemList from "@/react/app/mainApp/pages/myitem/list/MyItemListPage";
import MyItemEdit from "@/react/app/mainApp/pages/myitem/edit/MyItemEditPage";
import MyItemNew from "@/react/app/mainApp/pages/myitem/new/MyItemNewPage";
import SearchItemCategoryPage from '@/react/app/mainApp/pages/search/itemCategory/SearchItemCategoryPage';
import SearchProducerPage from "@/react/app/mainApp/pages/search/producer/SearchProducerPage";
import SearchPlanPage from "@/react/app/mainApp/pages/search/plan/SearchPlanPage";
import ItemRequestFormPage from "@/react/app/mainApp/pages/item/requestForm/ItemRequestFormPage";
import MessageShowPage from "@/react/app/mainApp/pages/message/show/MessageShowPage";
import {useRecoilValue} from "recoil";
import {IsAuthProducerStates} from "@/react/app/mainApp/states/AuthStates";
import ReceiveRequestListPage from "@/react/app/mainApp/pages/receiveRequest/list/ReceiveRequestListPage";
import ReceiveRequestShow from "@/react/app/mainApp/pages/receiveRequest/show/ReceiveRequestShowPage";
import MessageListPage from "@/react/app/mainApp/pages/message/message-list/MessageListPage";

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
				<Route path='/searchItemCategory' element={ <GuardRoute component={<SearchItemCategoryPage />} /> } />
				<Route path='/searchProducer' element={ <GuardRoute component={<SearchProducerPage />} /> } />
				<Route path='/searchPlan' element={ <GuardRoute component={<SearchPlanPage />} /> } />

				{/*/!* 商品関連 *!/*/}
				<Route path="/items">
					<Route index={true} element={  <GuardRoute component={<ItemList />} /> } />
					<Route path=":itemUuid" element={  <GuardRoute component={<ItemShowPage />} /> } />
					<Route path=":itemUuid/requestForm" element={  <GuardRoute component={<ItemRequestFormPage />} /> } />
				</Route>

				{/*/!* 生産者関連 *!/*/}
				<Route path="/producers">
					<Route index={true} element={  <GuardRoute component={<ProducerList />}/> } />
					<Route path=":producerId" element={  <GuardRoute component={<ProducerShow />} /> } />
				</Route>

				{/*/!* 商品管理 *!/*/}
				<Route path="/myitem">
					<Route index={true} element={<GuardRoute component={<MyItemList />}/> } />
					<Route path="new" element={<GuardRoute component={<MyItemNew />}/> } />
					<Route path=":itemUuid" element={<GuardRoute component={<MyItemShow />}/> } />
				{/*	<Route path=":itemUuid/edit" element={<GuardRoute component={<MyItemEdit />}/> } />*/}
				</Route>

				{/*/!*  マイページ  *!/*/}
				<Route path="/mypage">
					<Route index={true} element={<GuardRoute component={<MyPageTop />}/> } />
					<Route path="myfavorite" element={<GuardRoute component={<MyPageFavoritePage />}/> } />{/* お気に入り */}
					<Route path="tradeHistory" element={<GuardRoute component={<MyPageTradeHistoryPage />}/> } />{/* 交換履歴 */}
					<Route path="invoice" element={<GuardRoute component={<MyPageInvoicePage />}/> } />{/* 請求書 */}
					<Route path="profile" element={<GuardRoute component={<MyPageProfilePage />}/> } />{/* 基本情報 */}
				</Route>

				{/*/!*  申請依頼  *!/*/}
				<Route path="receiveRequest">
					<Route index={true} element={<GuardRoute component={<ReceiveRequestListPage />}/>}/>
					<Route path=":tradeUuid" element={<GuardRoute component={<ReceiveRequestShow />}/>}/>
				</Route>

				{/*/!*  取引  *!/*/}
				<Route path="trade">
					<Route index={true} element={<GuardRoute component={<TradeList />} />}/>
					<Route path=":tradeUuid" element={<GuardRoute component={<TradeShow />}/>}/>
				</Route>

				{/*/!*  メッセージ  *!/*/}
				<Route path="message">
					<Route index={true} element={<GuardRoute component={<MessageListPage />} />}/>
					<Route path=":producerUuid" element={<GuardRoute component={<MessageShowPage />} />}/>
				</Route>

				{/*/!*  その他  *!/*/}
				<Route path="/contact" element={<GuardRoute component={<Contact />} /> } />{/* お問い合わせ */}
				<Route path="/info" element={<GuardRoute component={<TopicsListPage />} /> } />{/* お知らせ一覧 */}
				<Route path="/info/:infoId" element={<GuardRoute component={<TopicsShowPage />} />} />{/* お知らせ詳細 */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
