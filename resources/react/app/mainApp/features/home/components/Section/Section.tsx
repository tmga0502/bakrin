import React from 'react';
import {SectionType} from "./Section.type";
import {SectionStyle} from './Section.styles'

const Section: React.FC<SectionType> = ({children}) => {
	return (
		<section css={SectionStyle}>
			{children}
		</section>
	);
};

export default Section;
