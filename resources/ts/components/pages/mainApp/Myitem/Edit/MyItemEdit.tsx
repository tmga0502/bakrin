import {MainAppLayout} from "@/ts/components/ui/layout";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import React from "react";
import {Form} from "@/ts/components/pages/mainApp/Myitem/Edit/features";
import {useGetCategories} from "@/ts/_api/query/CategoryQuery";
import {useGetUnits} from "@/ts/_api/query/UnitQuery";
import {useGetPlans} from "@/ts/_api/query/PlanQuery";

const MyItemEditPage = () => {
	const params = useParams()
	const {data: itemData} = useGetItem(params.itemUuid)
	const {data: categoryData} = useGetCategories();
	const {data: unitData} = useGetUnits();
	const {data: planData} = useGetPlans();
	if(itemData === undefined ||
		categoryData === undefined ||
		unitData === undefined ||
		planData === undefined)
	{return <Loader/>}

	return (
	  <MainAppLayout>
		  <div className="max-w-[500px] mx-auto mb-48">
			  <Form itemData={itemData} categoryData={categoryData} unitData={unitData} planData={planData}/>
		  </div>
	  </MainAppLayout>
	);
};

export default MyItemEditPage;
