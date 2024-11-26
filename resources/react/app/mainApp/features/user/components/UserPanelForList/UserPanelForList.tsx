import React, {FC} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { userPanelForListType } from "./UserPanelForList.type";
import {AddressBox, ImageBox, ImageStyle, InfoBox, Wrapper} from './UserPanelForList.styles'

const UserPanelForList: FC<userPanelForListType> = ({data}) => {
	return(
		<Link to={'/producers/'+data.id}>
			<div css={Wrapper}>
				<div css={ImageBox}>
					<LazyLoadImage
						src={data.thumbnail_path}
						css={ImageStyle}
						alt={data.organization_name}
					/>
				</div>
				<div css={InfoBox}>
					<p css={AddressBox}>{data.address1 + data.address2}</p>
					<p>{data.organization_name}</p>
				</div>
			</div>
		</Link>
	)
}

export default UserPanelForList;
