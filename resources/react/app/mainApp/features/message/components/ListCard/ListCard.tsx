import React from 'react';
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {TalkRoomType} from "@/react/types/TalkRoomType";

const ListCard: React.FC<{ room: TalkRoomType }> = ({room}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const partner = room.members.find(member => member.user_id !== authUser.id)
	return (
		<Link to={`${partner?.user.uuid}`} className={'block bg-white border border-lightGray rounded-md mb-4 shadow-md p-3 '}>
			<div className={'flex items-center gap-6'}>
				<div className={'w-[60px] h-[60px]'}>
					<img src={partner?.user.thumbnail_path} className={'w-full h-full object-cover rounded-full'} alt={partner?.user.organization_name}/>
				</div>
				<div className={'w-[calc(100%_-_60px_-_24px)]'}>
					<p className={'mb-2'}>{partner?.user.organization_name}</p>
					<p className={'text-xs text-bakDark whitespace-nowrap overflow-hidden overflow-ellipsis'}>{room.lastMessage}</p>
				</div>
			</div>
		</Link>
	);
};

export default ListCard;
