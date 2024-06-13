import React from 'react';
import {LIstBoxType} from "@/ts/components/pages/mainApp/Home/features/ListBox/LIstBox.type";
import HomeTitle from "@/ts/components/ui/title/HomeTitle/HomeTitle";
import {GridBox} from "@/ts/components/ui/box";

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
