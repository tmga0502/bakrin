import React from 'react';
import {SectionType} from "./Section.type";
import {SectionStyle} from './Section.css'

const Section: React.FC<SectionType> = ({children}) => {
	return (
		<section className={SectionStyle}>
			{children}
		</section>
	);
};

export default Section;
