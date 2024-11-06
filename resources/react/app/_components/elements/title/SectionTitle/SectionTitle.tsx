import React from 'react';
import {SectionTitleType} from "./SectionTitle.type";
import {Link} from "react-router-dom";
import {MoreLinkStyle, TitleStyle, Wrapper} from './SectionTitle.styles'

const SectionTitle: React.FC<SectionTitleType> = ({title, moreLink}) => {
	return (
		<div css={Wrapper}>
			<p css={TitleStyle}>
				{title}
			</p>

			<Link to={moreLink}>
				<p css={MoreLinkStyle}>
					もっと見る
				</p>
			</Link>
		</div>
	);
};

export default SectionTitle;
