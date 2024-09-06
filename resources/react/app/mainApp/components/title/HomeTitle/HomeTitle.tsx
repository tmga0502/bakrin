import React from 'react';
import {HomeTitleType} from "@/react/app/mainApp/components/title/HomeTitle/HomeTitle.type";
import {Link} from "react-router-dom";

const HomeTitle: React.FC<HomeTitleType> = ({title, moreLink}) => {
	return (
		<div className="flex justify-between mb-3">
			<p className="flex items-center justify-center before:content-[''] before:w-[20px] before:border-t-[14px] before:border-solid before:border-mainGreen before:mr-2">
				{title}
			</p>

			<Link to={moreLink} className="hover:opacity-80">
				<p className="flex items-center after:content-['>'] after:ml-2">
					もっと見る
				</p>
			</Link>
		</div>
	);
};

export default HomeTitle;
