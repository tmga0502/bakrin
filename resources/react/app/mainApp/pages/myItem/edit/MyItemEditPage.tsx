
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import React from "react";
import {Form} from "@/react/app/mainApp/pages/myItem/edit/features";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {useGetUnits} from "@/react/api/query/UnitQuery";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";

function Loader() {
	return null;
}

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
	  <MainLayout>
		  <div className="max-w-[500px] mx-auto mb-48">
			  <Form itemData={itemData} categoryData={categoryData} unitData={unitData} planData={planData}/>
		  </div>
	  </MainLayout>
	);
};

export default MyItemEditPage;
