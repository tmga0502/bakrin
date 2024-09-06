import React from 'react';
import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { BreadcrumbRoutes } from '../constants';

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(BreadcrumbRoutes)

    return (
        <div className="w-full h-10 rounded bg-lightYellow py-2 px-4 mb-6">
            {breadcrumbs.map(({match, breadcrumb, location}, index) => {
                // 最後のパスはリンクしないようにする
                const pathNames = location.pathname.split('/').filter((x) => x)
                const last = index === pathNames.length
                return last ? (
                    <label key={index}>
                        <span key={match.pathname}>{breadcrumb}</span>
                    </label>
                ) : (
                    <Link key={index} to={match.pathname} className="hover:opacity-60">
                        {breadcrumb}
                        <span className="text-gray-500 mx-2"><i className="fas fa-chevron-right"></i></span>
                    </Link>
                )
            })}
        </div>
    );
};

export default Breadcrumb;
