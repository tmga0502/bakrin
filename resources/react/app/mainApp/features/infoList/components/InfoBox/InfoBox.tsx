import React from 'react';
import {InfoBoxType} from "./InfoBox.type";
import {Box, ItemWrapper} from './InfoBox.css';
import {IoMdArrowDropright} from "react-icons/io";
import {Link} from "react-router-dom";

const InfoBox: React.FC<InfoBoxType> = ({data}) => {
	return (
		<Link to={'/info/' + data.id} key={data.id}>
			<div className={Box}>
				<div className={ItemWrapper}>
					<p>{data.title}</p>
					<p>
						<IoMdArrowDropright className="text-xl"/>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default InfoBox;
