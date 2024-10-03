import React, {useState} from 'react';
import {AccordionListType} from "./AccordionList.type";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {AccordionBox, Body, ImageBox, ImageStyle, ItemNameStyle, ProducerNameStyle, Title} from "./AccordionList.css";

const AccordionList: React.FC<AccordionListType> = ({historyData}) => {
	const [accordionStatus, setAccordionStatus] = useState(false);
	return (
		<div className={AccordionBox} onClick={() => {setAccordionStatus(!accordionStatus)}}>
			<div className={Title}>
				<p>{historyData.date}</p>
				{accordionStatus ? (<IoIosArrowDown className="text-lg"/>) : (<IoIosArrowForward className="text-lg"/>)}
			</div>

			{accordionStatus ? historyData.histories.map((history: any, index: number) => (
				<div className={Body} key={index}>
					<div className={ImageBox}>
						<img src={history.thumbnail} className={ImageStyle} alt={history.itemName}/>
					</div>
					<p className={ItemNameStyle}>{history.itemName}</p>
					<p className={ProducerNameStyle}>{history.producerName}</p>
				</div>
			)) : null}
		</div>
	);
};

export default AccordionList;
