import React from 'react';
import {LIstBoxType} from "@/react/app/mainApp/pages/Home/features/ListBox/LIstBox.type";
import HomeTitle from "@/react/app/mainApp/components/title/HomeTitle/HomeTitle";
import {GridBox} from "@/react/app/mainApp/components/box";

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
