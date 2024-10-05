import React from 'react';
import {InfoData} from "@/react/app/mainApp/_dummyData/InfoData";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import InfoBox from "@/react/app/mainApp/features/infoList/components/InfoBox/InfoBox";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const InfoList = () => {
    return (
       <MainLayout>
		   <PageTitle en={'TOPICS'} jp={'お知らせ'}/>
		   {InfoData.map(info => (
			   <InfoBox data={info} key={info.id}/>
		   ))}
	   </MainLayout>
    );
};

export default InfoList;
