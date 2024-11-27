import React from 'react';
import {Link} from "react-router-dom";

type SectionTitleType = {
	title   : string,
	moreLink: string,
}

const SectionTitle: React.FC<SectionTitleType> = ({title, moreLink}) => {
	return (
		<div className={'flex justify-between mb-2'}>
			<p className={`
				flex items-center justify-center text-md font-bold
				before:contents-[''] before:w-[20px] before:border-t-[16px] before:border-t-mainGreen before:mr-2
			`}>
				{title}
			</p>

			<Link to={moreLink}>
				<p className={`
					flex items-center after:content-['>'] after:ml-2
				`}>
					もっと見る
				</p>
			</Link>
		</div>
	);
};

export default SectionTitle;
