import React, {FC} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {UserType} from "@/react/types/UserType";

const UserPanelForList: FC<{data: UserType}> = ({data}) => {
	return(
		<Link to={'/producers/'+data.id}>
			<div className={'border border-bakGray rounded-md shadow-md'}>
				<div className={'relative w-full before:contents-[""] before:block before:pt-[100%]'}>
					<LazyLoadImage
						src={data.thumbnail_path}
						className={'absolute w-full h-full top-0 left-0 object-cover rounded-t-md'}
						alt={data.organization_name}
					/>
				</div>
				<div className={'p-2'}>
					<p className={'leading-8 text-xs'}>{data.address1 + data.address2}</p>
					<p>{data.organization_name}</p>
				</div>
			</div>
		</Link>
	)
}

export default UserPanelForList;
