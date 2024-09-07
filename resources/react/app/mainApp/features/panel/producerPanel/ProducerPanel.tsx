import React, {FC} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { producerPanelType } from "./ProducerPanel.type";

const ProducerPanel: FC<producerPanelType> = ({data}) => {
	return(
		<Link to={'/producers/'+data.uuid}>
			<div className="border-2 rounded-md shadow-lg">
				<div className="relative w-full before:content-[''] before:block before:pt-[100%]">
					<LazyLoadImage
						src={data.imgPath}
						className="absolute w-full h-full top-0 left-0 object-cover object-center rounded-tl-md rounded-tr-md"
						alt={data.organizationName}
					/>
				</div>
				<div className="p-2">
					<p className="leading-8 text-xs">{data.address1 + data.address2}</p>
					<p>{data.organizationName}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProducerPanel;
