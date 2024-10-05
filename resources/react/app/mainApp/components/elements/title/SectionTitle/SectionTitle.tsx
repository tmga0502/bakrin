import React from 'react';
import {SectionTitleType} from "./SectionTitle.type";
import {Link} from "react-router-dom";
import {MoreLinkStyle, TitleStyle, Wrapper} from './SectionTitle.css'

const SectionTitle: React.FC<SectionTitleType> = ({title, moreLink}) => {
	return (
		<div className={Wrapper}>
			<p className={TitleStyle}>
				{title}
			</p>

			<Link to={moreLink}>
				<p className={MoreLinkStyle}>
					もっと見る
				</p>
			</Link>
		</div>
	);
};

export default SectionTitle;
