import React from 'react';
import {InfoBoxType} from "./InfoBox.type";
import {Box, ItemWrapper} from './InfoBox.styles';
import {IoMdArrowDropright} from "react-icons/io";
import {Link} from "react-router-dom";

const InfoBox: React.FC<InfoBoxType> = ({data}) => {
	return (
		<Link to={'/info/' + data.id} key={data.id}>
			<div css={Box}>
				<div css={ItemWrapper}>
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
