import React, {FC, useState} from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { ListType } from './List.type';


const List: FC<ListType> = ({data}) => {
	const [accordionStatus, setAccordionStatus] = useState(false);
	return (
		<div
			className="max-w-[500px] mx-auto border bg-white rounded-md shadow p-4 mb-2 hover:cursor-pointer"
			onClick={()=>{setAccordionStatus(!accordionStatus)}}
		>
			<div className="flex justify-between items-center">
				<p className="m-0">{data.date}</p>
				{accordionStatus ? ( <IoIosArrowDown className="text-lg"/>):(<IoIosArrowForward className="text-lg"/>)}
			</div>

			{accordionStatus ? data.histories.map((history:any, index:number)=>(
				<div className="mt-4 flex items-center pb-2 border-b-2" key={index}>
					<div className="w-10 h-10">
						<img src={history.thumbnail} className="w-full h-full object-cover" alt={history.itemName} />
					</div>
					<p className="mb-0 ml-2">{history.itemName}</p>
					<p className="mb-0 ml-auto">{history.producerName}</p>
				</div>
			)):null}
		</div>
	);
};

export default List;
