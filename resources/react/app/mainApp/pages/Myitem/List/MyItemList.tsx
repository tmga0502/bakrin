import {MainAppLayout} from "@/react/app/mainApp/components/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import {useGetMyItems} from "@/react/api/query/ItemQuery";
import Loader from "@/react/app/mainApp/components/loader/Loader";
import {Link} from "react-router-dom";
import React from "react";
import {MainButton} from "@/react/app/mainApp/components/button";
import {ListItem} from "@/react/app/mainApp/pages/Myitem/List/features";

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
