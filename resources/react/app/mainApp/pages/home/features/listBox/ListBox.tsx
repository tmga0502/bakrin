import React from 'react';
import {LIstBoxType} from "./ListBox.type";
import HomeTitle from "../../../../components/title/HomeTitle/HomeTitle";
import {GridBox} from "@/react/app/mainApp/features/layout";

const ListBox: React.FC<LIstBoxType> = ({ title, moreLink, children }) => {
	return (
		<div className="mb-14">
			<HomeTitle title={title} moreLink={moreLink}/>
			<GridBox>
				{children}
			</GridBox>
		</div>
	);
};

export default ListBox;
