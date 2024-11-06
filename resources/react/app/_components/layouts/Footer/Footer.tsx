import React from 'react';
import {Link} from "react-router-dom";
import { FooterMenu } from './constants';
import {CopyWrite, ListStyle, UlStyle, Wrapper} from './Footer.styles'

const Footer = () => {

	const now = new Date();
	const nowYear = now.getFullYear();

	return (
		<footer css={Wrapper}>
			<ul css={UlStyle}>
				{FooterMenu.map((menu, index) => (
					<Link to={menu.link} key={index}>
						<li css={ListStyle}>
								{menu.title}
						</li>
					</Link>
				))}
			</ul>
			<p css={CopyWrite}>
				Copyright {nowYear} 農援株式会社
			</p>
        </footer>
    );
};

export default Footer;
