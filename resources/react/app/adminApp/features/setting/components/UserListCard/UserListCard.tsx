import React from 'react';
import MainCard from "@adminLayouts/Card/MainCard/MainCard";
import {UserType} from "@adminFeatures/setting/types/type";
import {Link} from "react-router-dom";
import {Budge} from "@adminElements/budge";

const UserListCard: React.FC<UserType> = ({userData}) => {
	const authority = userData.role === 0 ? 'ﾏｽﾀｰ' : '一般';
	const authorityColor = userData.role === 0 ? 'danger' : 'info';

	return (
		<Link to={`/admin/setting/user/${userData.id}`} className={'block mb-4'}>
			<MainCard>
				<div className={'flex justify-between items-center'}>
					<span>{userData.name}</span>
					<Budge color={authorityColor} value={authority}/>
				</div>
			</MainCard>
		</Link>
	);
};

export default UserListCard;
