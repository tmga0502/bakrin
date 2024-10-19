import React from 'react';
import {LinkStyle, NameStyle} from './UserListCard.styles';
import MainCard from "@adminLayouts/Card/MainCard/MainCard";
import {UserType} from "@adminFeatures/setting/types/type";
import {Link} from "react-router-dom";
import {Budge} from "@adminElements/budge";

const UserListCard: React.FC<UserType> = ({userData}) => {
	const authority = userData.authority === 0 ? 'ﾏｽﾀｰ' : '一般';
	const authorityColor = userData.authority === 0 ? 'danger' : 'info';

	return (
		<Link to={`/admin/setting/user/${userData.id}`} css={LinkStyle}>
			<MainCard>
				<div css={NameStyle}>
					<span>{userData.name}</span>
					<Budge color={authorityColor} value={authority}/>
				</div>
			</MainCard>
		</Link>
	);
};

export default UserListCard;
