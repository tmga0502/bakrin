import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/title";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {useGetMessageLists} from "@/react/api/query/MessageQuery";
import {Link} from "react-router-dom";
import {Card} from "@/react/app/mainApp/features/card";
import Loader from "@/react/app/mainApp/features/loader/Loader";

const MessageList = () => {
	const {data: messageLists} = useGetMessageLists()
	if (messageLists === undefined) return <Loader/>

	return (
		<MainAppLayout>
			<PageTitle en={'MESSAGE'} jp={'メッセージ一覧'}/>
			<div className="max-w-2xl mx-auto mt-10">
				{messageLists.map((room: any, index: number) => (
					<Link to={`${room.partner.uuid}`} key={index}>
						<Card>
							<div className="w-[60px] h-[60px]">
								<img src={room.partner.imgPath} className="w-full h-full rounded-full object-cover" alt={room.partner.organizationName}/>
							</div>
							<div className={'w-[calc(100%-60px-1rem)]'}>
								<p className="mb-2">{room.partner.organizationName}</p>
								<p className="text-sm text-gray-500 truncate">{room.lastMessage}</p>
							</div>
						</Card>
					</Link>
				))}

			</div>
		</MainAppLayout>
	);
};

export default MessageList;
