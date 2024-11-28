import React, {useState} from 'react';
import {ItemType} from "@/react/types/ItemType";
import { UserType } from '@/react/types/UserType';
import {PageTitle} from "@mainElements/title";
import Tab from "@mainLayouts/tab/Tab/Tab";
import {ItemPanelForList} from "@mainFeatures/item/components";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {UserPanelForList} from "@mainFeatures/user/components";

type  MyPageFavoriteContextType = {
	ItemData: ItemType[],
	UserData: UserType[],
}

const MyPageFavoriteContext:React.FC<MyPageFavoriteContextType> = ({ItemData, UserData}) => {

	const [viewMode, setViewMode] = useState('アイテム')
	const tabMenu = ['アイテム', '生産者']

	return (
		<>
			<PageTitle en={'favorite'} jp={'お気に入り'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{viewMode === 'アイテム' ? (
				<GridBox>
					{ItemData.map(itemData => (
						<ItemPanelForList itemData={itemData} key={itemData.id}/>
					))}
				</GridBox>
			):(
				<GridBox>
					{UserData.map(userData => (
						<UserPanelForList data={userData} key={userData.id}/>
					))}
				</GridBox>
			)}
		</>
	);
};

export default MyPageFavoriteContext;
