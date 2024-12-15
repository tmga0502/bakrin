import React, {ReactNode} from 'react';
import {useParams} from "react-router-dom";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import { useAgentCompleteRegistration } from '@/react/api/query/AuthAgentQuery';
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";
import ErrorPage from "@/react/app/mainApp/pages/error/Error";
import RegisterCompletedContext from "@/react/app/agentApp/features/register/context/RegisterCompletedContext";

const RegisterCompletedPage = () => {
	const params = useParams()
	const {data, isLoading, isError, isSuccess} = useAgentCompleteRegistration(params.agentUuid as string)

	let context: ReactNode
	if (isLoading){
		context = <PageLoader/>
	}
	if (isError){
		context = <ErrorPage/>
	}
	if (isSuccess){
		context = <RegisterCompletedContext data={data}/>
	}

	console.log(isError)

	return (
		<ContainerSm>
			{context}
		</ContainerSm>
	);
};

export default RegisterCompletedPage;
