import React from 'react';[]

type PageTitleType = {
	en: string,
	jp: string,
}

const PageTitle: React.FC<PageTitleType> = ({en, jp}) => {
    return(
        <div className={'border-b-2 border-b-bakDark mb-4'}>
            <p className={'text-mainGreen mb-1.5 uppercase'}>{en}</p>
            <p className={'text-xl'}>{jp}</p>
        </div>
    )
}

export default PageTitle
