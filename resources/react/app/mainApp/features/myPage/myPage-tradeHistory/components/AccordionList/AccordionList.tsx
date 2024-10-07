import React, {useState} from 'react';
import {AccordionListType} from "./AccordionList.type";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {AccordionBox, ArrowStyle, Body, ImageBox, ImageStyle, ItemNameStyle, ProducerNameStyle, Title} from "./AccordionList.styles";

const AccordionList: React.FC<AccordionListType> = ({historyData}) => {
	const [accordionStatus, setAccordionStatus] = useState(false);
	return (
		<div css={AccordionBox} onClick={() => {setAccordionStatus(!accordionStatus)}}>
			<div css={Title}>
				<p>{historyData.date}</p>
				{accordionStatus ? (<IoIosArrowDown css={ArrowStyle}/>) : (<IoIosArrowForward css={ArrowStyle}/>)}
			</div>

			{accordionStatus ? historyData.histories.map((history: any, index: number) => (
				<div css={Body} key={index}>
					<div css={ImageBox}>
						<img src={history.thumbnail} css={ImageStyle} alt={history.itemName}/>
					</div>
					<p css={ItemNameStyle}>{history.itemName}</p>
					<p css={ProducerNameStyle}>{history.producerName}</p>
				</div>
			)) : null}
		</div>
	);
};

export default AccordionList;
