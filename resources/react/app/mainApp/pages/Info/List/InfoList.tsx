import React from 'react';
import {Link} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import {InfoData} from "@/react/app/mainApp/_dummyData/InfoData";
import {PageTitle} from "@/react/app/mainApp/components/title";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import InfoBox from "@/react/app/mainApp/features/infoList/components/InfoBox/InfoBox";

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
