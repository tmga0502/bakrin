import React from 'react';
import {Link} from "react-router-dom";
import { FooterMenu } from './_constants';

const Footer = () => {

	const now = new Date();
	const nowYear = now.getFullYear();

	return (
		<footer className="w-screen bg-bakDark py-4 z-30">
			<ul className="text-center md:text-left md:flex justify-center text-white mb-4">
				{FooterMenu.map((menu, index) => (
					<li className="px-4 py-2 md:border-r-2 hover:opacity-80" key={index}>
						<Link  to={menu.link}>
							{menu.title}
						</Link>
					</li>
				))}
			</ul>
			<p className="text-center text-white">
				Copyright {nowYear} 農援株式会社
			</p>
        </footer>
    );
};

export default Footer;
