import React from 'react';
import { PageTitleType } from './_type';


const PageTitle: React.FC<PageTitleType> = ({en, jp}) => {
    return(
        <div className="border-b-2 border-dark mb-4">
            <p className="text-mainGreen mb-1.5 uppercase">{en}</p>
            <p className="text-2xl">{jp}</p>
        </div>
    )
}

export {
    PageTitle,
};
