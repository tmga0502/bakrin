import React from 'react';
import { PageTitleType } from './PageTitle.type';
import {EnTitle, JpTitle, Wrapper} from './PageTitle.styles'

const PageTitle: React.FC<PageTitleType> = ({en, jp}) => {
    return(
        <div css={Wrapper}>
            <p css={EnTitle}>{en}</p>
            <p css={JpTitle}>{jp}</p>
        </div>
    )
}

export default PageTitle
