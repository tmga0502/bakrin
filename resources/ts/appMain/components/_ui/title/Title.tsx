import React from 'react';
import {CategoryTitleType, PageTitleType} from "@/ts/appMain/components/_ui/title/type";

const CategoryTitle = (props: CategoryTitleType) => {
    return (
        <p className="flex items-center justify-center before:content-[''] before:w-[20px] before:border-t-[14px] before:border-solid before:border-mainGreen before:mr-2">
            {props.title}
        </p>
    );
};

const PageTitle = (props:PageTitleType) => {
    return(
        <div className="border-b-2 border-dark mb-4">
            <p className="text-mainGreen mb-1.5 uppercase">{props.en}</p>
            <p className="text-2xl">{props.jp}</p>
        </div>
    )
}

export {
    CategoryTitle,
    PageTitle,
};
