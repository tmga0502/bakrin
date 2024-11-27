import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { BreadcrumbRoutes } from './constants';
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(BreadcrumbRoutes)

    return (
        <div className={'flex items-center gap-2 w-full h-[40px] rounded-md bg-lightYellow px-2 py-2 mb-6 text-bakDark'}>
            {breadcrumbs.map(({match, breadcrumb, location}, index) => {
                // 最後のパスはリンクしないようにする
                const pathNames = location.pathname.split('/').filter((x) => x)
                const last = index === pathNames.length
                return last ? (
                    <label key={index}>
                        <span key={match.pathname}>{breadcrumb}</span>
                    </label>
                ) : (
					<Fragment key={index}>
						<Link key={index} to={match.pathname} className={'hover:opacity-80'}>
							<span >{breadcrumb}</span>
						</Link>
						<span><IoIosArrowForward size={14}/></span>
					</Fragment>
                )
            })}
        </div>
    );
};

export default Breadcrumb;
