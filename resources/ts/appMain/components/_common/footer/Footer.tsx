import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

    const now = new Date();
    const nowYear = now.getFullYear();

    return (
        <footer className="w-screen bg-dark py-4 z-30">
            <ul className="text-center md:text-left md:flex justify-center text-white mb-4">
                <li className="px-4 py-2 md:border-r-2 hover:opacity-80">
                    <Link  to={''}>
                        会社情報
                    </Link>
                </li>
                <li className="px-4 py-2 md:border-r-2 hover:opacity-80">
                    <Link  to={''}>
                        特定商取引方に基づく表記
                    </Link>
                </li>
                <li className="px-4 py-2 hover:opacity-80">
                    <Link  to={''}>
                        個人情報保護方針について
                    </Link>
                </li>
            </ul>
            <p className="text-center text-white">
                Copyright {nowYear} 農援株式会社
            </p>
        </footer>
    );
};

export default Footer;
