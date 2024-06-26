import React from 'react';
import {Link} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import {InfoData} from "@/ts/_dummyData/InfoData";
import {PageTitle} from "@/ts/components/ui/title";
import {MainAppLayout} from "@/ts/components/ui/layout";

const InfoList = () => {
    return (
       <MainAppLayout>
		   <PageTitle en={'TOPICS'} jp={'お知らせ'}/>
		   {InfoData.map(info => (
			   <Link to={'/info/' + info.id} key={info.id}>
				   <div className="px-4 py-2 mb-4 border-b-2">
					   <div className="flex justify-between items-center">
						   <p>{info.title}</p>
						   <p>
							   <IoMdArrowDropright className="text-xl"/>
						   </p>
					   </div>
				   </div>
			   </Link>
		   ))}
	   </MainAppLayout>
    );
};

export default InfoList;
