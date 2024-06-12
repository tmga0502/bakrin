import {MainAppLayout} from "@/ts/components/ui/layout";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import React from "react";
import Form from "@/ts/components/pages/mainApp/Myitem/Edit/features/Form";

const MyItemEditPage = () => {
	const params = useParams()
	const {data} = useGetItem(params.itemUuid)
	if(data === undefined) return <Loader/>

	return (
	  <MainAppLayout>
		  <div className="max-w-[500px] mx-auto mb-48">
			  <Form data={data}/>
		  </div>
	  </MainAppLayout>
	);
};

export default MyItemEditPage;
