import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { BreadcrumbRoutes } from './constants';
import {ArrowStyle, HoverTextStyle, TextStyle, Wrapper} from './Breadcrumb.styles'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs(BreadcrumbRoutes)

    return (
        <div css={Wrapper}>
            {breadcrumbs.map(({match, breadcrumb, location}, index) => {
                // 最後のパスはリンクしないようにする
                const pathNames = location.pathname.split('/').filter((x) => x)
                const last = index === pathNames.length
                return last ? (
                    <label css={TextStyle} key={index}>
                        <span key={match.pathname}>{breadcrumb}</span>
                    </label>
                ) : (
					<Fragment key={index}>
						<Link key={index} to={match.pathname} css={[TextStyle, HoverTextStyle]}>
							<span >{breadcrumb}</span>
						</Link>
						<span css={ArrowStyle}><IoIosArrowForward size={14}/></span>
					</Fragment>
                )
            })}
        </div>
    );
};

export default Breadcrumb;
