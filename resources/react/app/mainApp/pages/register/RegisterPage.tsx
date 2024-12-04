import React, { ReactNode } from 'react';
import RegisterContext from "@mainFeatures/register/context/RegisterContext";
import {useParams} from "react-router-dom";
import {useCheckReferralCode} from "@/react/api/query/ReferralCodeQuery";
import Loading from "react-loading";
import ErrorPage from "@/react/app/mainApp/pages/error/Error";
import Footer from "@mainLayouts/Footer/Footer";

const RegisterPage = () => {
	const params = useParams();
	//紹介コードチェック
	const {data, isLoading, isError, isSuccess} = useCheckReferralCode(params.referralCode as string)

	let context: ReactNode
	if(isLoading) {
		context = <Loading/>
	}
	if(isError) {
		context = <ErrorPage/>
	}
	if (isSuccess && data){
		context = <RegisterContext referralCode={params.referralCode as string}/>
	}
	if (isSuccess && !data){
		context = <ErrorPage/>
	}

	return (
		<>
			{context}
			<div className={'h-40'}></div>
			<Footer/>
		</>
	);
};

export default RegisterPage;
