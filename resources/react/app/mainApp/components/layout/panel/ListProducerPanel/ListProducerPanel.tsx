import React, {FC} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { listProducerPanelType } from "./ListProducerPanel.type";
import {AddressBox, ImageBox, ImageStyle, InfoBox, Wrapper} from './ListProducerPanel.css'

const ListProducerPanel: FC<listProducerPanelType> = ({data}) => {
	return(
		<Link to={'/producers/'+data.uuid}>
			<div className={Wrapper}>
				<div className={ImageBox}>
					<LazyLoadImage
						src={data.imgPath}
						className={ImageStyle}
						alt={data.organizationName}
					/>
				</div>
				<div className={InfoBox}>
					<p className={AddressBox}>{data.address1 + data.address2}</p>
					<p>{data.organizationName}</p>
				</div>
			</div>
		</Link>
	)
}

export default ListProducerPanel;
