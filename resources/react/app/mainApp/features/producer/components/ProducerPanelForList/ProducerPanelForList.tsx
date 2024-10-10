import React, {FC} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { producerPanelForListType } from "./ProducerPanelForList.type";
import {AddressBox, ImageBox, ImageStyle, InfoBox, Wrapper} from './ProducerPanelForList.styles'

const ProducerPanelForList: FC<producerPanelForListType> = ({data}) => {
	return(
		<Link to={'/producers/'+data.uuid}>
			<div css={Wrapper}>
				<div css={ImageBox}>
					<LazyLoadImage
						src={data.imgPath}
						css={ImageStyle}
						alt={data.organizationName}
					/>
				</div>
				<div css={InfoBox}>
					<p css={AddressBox}>{data.address1 + data.address2}</p>
					<p>{data.organizationName}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProducerPanelForList;
