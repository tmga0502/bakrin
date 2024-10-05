import React from 'react';
import { PageTitleType } from './PageTitle.type';
import {EnTitle, JpTitle, Wrapper} from './PageTitle.css'

const PageTitle: React.FC<PageTitleType> = ({en, jp}) => {
    return(
        <div className={Wrapper}>
            <p className={EnTitle}>{en}</p>
            <p className={JpTitle}>{jp}</p>
        </div>
    )
}

export default PageTitle
