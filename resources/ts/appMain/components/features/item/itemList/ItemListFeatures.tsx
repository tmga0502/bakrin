import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {useGetNewArrivalItems} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";
import {ItemListPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";

const ItemListFeatures = () => {

	const { data: itemLists, status } = useGetNewArrivalItems()

	if (status === "success"){
		return (
			<MainLayout>
				<PageTitle en={'ITEMS'} jp={'アイテム一覧'}/>
				<Breadcrumb/>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{itemLists.map((item) => (
						<ItemListPanel data={item} key={item.id}/>
					))}
				</div>
			</MainLayout>
		);
	} else {
		return <Loader/>
	}
};

export default ItemListFeatures;
