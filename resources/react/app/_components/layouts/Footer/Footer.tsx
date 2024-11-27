import React from 'react';
import {Link} from "react-router-dom";
import { FooterMenu } from './constants';

const Footer = () => {

	const now = new Date();
	const nowYear = now.getFullYear();

	return (
		<footer className={'w-screen bg-dark px-4 z-[30]'}>
			<ul className={'text-center text-white mb-4 md:text-left md:flex md:justify-center'}>
				{FooterMenu.map((menu, index) => (
					<Link to={menu.link} key={index}>
						<li className={'text-white px-2 py-4 hover:opacity-80'}>
							{menu.title}
						</li>
					</Link>
				))}
			</ul>
			<p className={'text-center text-white'}>
				Copyright {nowYear} 農援株式会社
			</p>
        </footer>
    );
};

export default Footer;
