import React from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import {useGetFavoriteUsers} from "@/react/api/query/UserQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import MyPageFavoriteContext from "@mainFeatures/myPage/context/MyPageFavoriteContext";

const MyPageFavoritePage = () => {
	const { data: ItemData = [] } = useGetFavoriteItems()
	const { data: UserData = []} = useGetFavoriteUsers()

	return (
		<MainLayout>
			<MyPageFavoriteContext ItemData={ItemData} UserData={UserData}/>
		</MainLayout>
	);
};

export default MyPageFavoritePage;
