import React from 'react';
import {CategoryTitle} from "@/ts/appMain/components/_ui/title/Title";
import {MoreButton} from "@/ts/appMain/components/_ui/button/Button";

const HomeProductTitle = (props: {title:string, moreLink:string}) => {
    return (
        <div className="flex justify-between mb-3">
            <CategoryTitle title={props.title}/>
            <MoreButton link={props.moreLink}/>
        </div>
    );
};

export default HomeProductTitle;
