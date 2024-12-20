import React, {ReactElement} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ContactPage from "@/react/app/mainApp/pages/contact/ContactPage";
import Login from "@/react/app/mainApp/pages/login/Login";
import TopicsListPage from "@/react/app/mainApp/pages/topics/topics-list/TopicsListPage";
import TopicsShowPage from "@/react/app/mainApp/pages/topics/topics-show/TopicsShowPage";
import MyPageTop from "@/react/app/mainApp/pages/myPage/top/MyPageTopPage";
import MyPageFavoritePage from "@/react/app/mainApp/pages/myPage/favorite/MyPageFavoritePage";
import MyPageTradeHistoryPage from "@/react/app/mainApp/pages/myPage/tradeHistory/MyPageTradeHistoryPage";
import MyPageInvoicePage from "@/react/app/mainApp/pages/myPage/invoice/MyPageInvoicePage";
import MyPageProfilePage from "@/react/app/mainApp/pages/myPage/profile/MyPageProfilePage";
import UserShow from "@/react/app/mainApp/pages/user/show/UserShowPage";
import UserList from "@/react/app/mainApp/pages/user/list/UserListPage";
import TradeList from "@/react/app/mainApp/pages/trade/list/TradeListPage";
import TradeShow from "@/react/app/mainApp/pages/trade/show/TradeShowPage";
import SearchItemCategoryPage from '@/react/app/mainApp/pages/search/search-itemCategory/SearchItemCategoryPage';
import SearchUserPage from "@/react/app/mainApp/pages/search/search-user/SearchUserPage";
import SearchPlanPage from "@/react/app/mainApp/pages/search/plan/SearchPlanPage";
import MessageShowPage from "@/react/app/mainApp/pages/message/show/MessageShowPage";
import {useRecoilValue} from "recoil";
import {IsAuthUserStates} from "@/react/app/mainApp/states/AuthStates";
import ReceiveRequestListPage from "@/react/app/mainApp/pages/receiveRequest/list/ReceiveRequestListPage";
import ReceiveRequestShow from "@/react/app/mainApp/pages/receiveRequest/show/ReceiveRequestShowPage";
import UserListFeaturedPage from "@/react/app/mainApp/pages/user/listFeatured/UserListFeaturedPage";
import MessageListPage from "@/react/app/mainApp/pages/message/message-list/MessageListPage";
import HomePage from "@/react/app/mainApp/pages/home/HomePage";
import ItemListPage from "@/react/app/mainApp/pages/item/item-list/ItemListPage";
import ItemListNewArrivalPage from "@/react/app/mainApp/pages/item/item-listNewArrival/ItemListNewArrivalPage";
import ItemListWantPage from "@/react/app/mainApp/pages/item/item-listWant/ItemListWantPage";
import ItemListSeasonPage from "@/react/app/mainApp/pages/item/item-listSeason/ItemListSeasonPage";
import ItemListFavoritePage from "@/react/app/mainApp/pages/item/item-listFavorite/ItemListFavoritePage";
import ItemShowPage from "@/react/app/mainApp/pages/item/item-show/ItemShowPage";
import ItemRequestFormPage from "@/react/app/mainApp/pages/item/item-requestForm/ItemRequestFormPage";
import MyItemListPage from "@/react/app/mainApp/pages/myItem/myItem-list/MyItemListPage";
import MyItemNewPage from "@/react/app/mainApp/pages/myItem/myItem-new/MyItemNewPage";
import MyItemEditPage from "@/react/app/mainApp/pages/myItem/myItem-edit/MyItemEditPage";
import MyItemShowPage from "@/react/app/mainApp/pages/myItem/myItem-show/MyItemShowPage";
import MyPageWantPage from "@/react/app/mainApp/pages/myPage/want/MyPageWantPage";
import RegisterPage from "@/react/app/mainApp/pages/register/main/RegisterPage";
import RegisterTemporaryCompletedPage from "@/react/app/mainApp/pages/register/temporaryCompleted/RegisterTemporaryCompletedPage";
import RegisterCompletedPage from "@/react/app/mainApp/pages/register/completed/RegisterCompletedPage";

const Router = () => {

	const isAuth = useRecoilValue(IsAuthUserStates);

	const GuardRoute = (props : {component: ReactElement}) => {
		if(!isAuth) return<Navigate to="/login" />
		return <>{ props.component }</>
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={  <Login /> } />

				{/*新規登録ページ*/}
				<Route path="/register/:referralCode" element={  <RegisterPage /> } />
				<Route path="/register_completed/" element={  <RegisterTemporaryCompletedPage /> } />
				<Route path="/register_completed/:userUuid" element={  <RegisterCompletedPage /> } />

				{/* TOPページ */}
				<Route path={'/'} element={  <GuardRoute component={<HomePage />} /> } />

				{/*/!* 検索関連 *!/*/}
				<Route path='/searchItemCategory' element={ <GuardRoute component={<SearchItemCategoryPage />} /> } />
				<Route path='/searchUser' element={ <GuardRoute component={<SearchUserPage />} /> } />
				<Route path='/searchPlan' element={ <GuardRoute component={<SearchPlanPage />} /> } />

				{/*/!* 商品関連 *!/*/}
				<Route path="/items">
					<Route index={true} element={  <GuardRoute component={<ItemListPage />} /> } />
					<Route path="newArrival" element={  <GuardRoute component={<ItemListNewArrivalPage />} /> } />
					<Route path="want" element={  <GuardRoute component={<ItemListWantPage />} /> } />
					<Route path="season" element={  <GuardRoute component={<ItemListSeasonPage />} /> } />
					<Route path="favorite" element={  <GuardRoute component={<ItemListFavoritePage />} /> } />
					<Route path=":itemUuid" element={  <GuardRoute component={<ItemShowPage />} /> } />
					<Route path=":itemUuid/requestForm" element={  <GuardRoute component={<ItemRequestFormPage />} /> } />
				</Route>

				{/*/!* 生産者関連 *!/*/}
				<Route path="/producers">
					<Route index={true} element={  <GuardRoute component={<UserList />}/> } />
					<Route path="featured" element={  <GuardRoute component={<UserListFeaturedPage />}/> } />
					<Route path=":userId" element={  <GuardRoute component={<UserShow />} /> } />
				</Route>

				{/*/!* 商品管理 *!/*/}
				<Route path="/myitem">
					<Route index={true} element={<GuardRoute component={<MyItemListPage />}/> } />
					<Route path="new" element={<GuardRoute component={<MyItemNewPage />}/> } />
					<Route path=":itemUuid" element={<GuardRoute component={<MyItemShowPage />}/> } />
					<Route path=":itemUuid/edit" element={<GuardRoute component={<MyItemEditPage />}/> } />
				</Route>

				{/*/!*  マイページ  *!/*/}
				<Route path="/mypage">
					<Route index={true} element={<GuardRoute component={<MyPageTop />}/> } />
					<Route path="myfavorite" element={<GuardRoute component={<MyPageFavoritePage />}/> } />{/* お気に入り */}
					<Route path="want" element={<GuardRoute component={<MyPageWantPage />}/> } />{/* 欲しいもの */}
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
					<Route path=":partnerUuid" element={<GuardRoute component={<MessageShowPage />} />}/>
				</Route>

				{/*/!*  その他  *!/*/}
				<Route path="/contact" element={<GuardRoute component={<ContactPage />} /> } />{/* お問い合わせ */}
				<Route path="/info" element={<GuardRoute component={<TopicsListPage />} /> } />{/* お知らせ一覧 */}
				<Route path="/info/:uuid" element={<GuardRoute component={<TopicsShowPage />} />} />{/* お知らせ詳細 */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
