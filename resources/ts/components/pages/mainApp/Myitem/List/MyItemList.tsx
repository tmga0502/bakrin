import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title";
import {useGetMyItems} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import {Link} from "react-router-dom";
import React from "react";
import {MainButton} from "@/ts/components/ui/button";
import {ListItem} from "@/ts/components/pages/mainApp/Myitem/List/features";

const MyItemListPage = () => {
	const { data } = useGetMyItems();
	if(data === undefined) return <Loader/>

	return (
	  <MainAppLayout>
		  <PageTitle en={'MY ITEM'} jp={'アイテム一覧'}/>

		  <div className="text-right">
			  <Link to={'new'} className="inline-block">
				  <MainButton value={'新規登録'} color={'danger'} type={'button'} size={'sm'}/>
			  </Link>
		  </div>

		  <div className="my-4">
			  {data.map(item => (
				  <ListItem key={item.id} data={item}/>
			  ))}
		  </div>
	  </MainAppLayout>
	);
};

export default MyItemListPage;
