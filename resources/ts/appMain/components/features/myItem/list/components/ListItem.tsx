import React from 'react';
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {Link} from "react-router-dom";
import {ItemType} from "@/ts/types/ItemType";




const ListItem = (props:{data: ItemType}) => {

    return (
        <div className="flex items-center justify-between gap-6 bg-white border rounded-sm shadow p-4 mb-2">
            <div className="w-16 h-16">
                <img src={props.data.thumbnail} className="w-full h-full object-cover" alt="item img"/>
            </div>
            <div className="flex items-center justify-between w-[calc(100%_-_156px)]">
                <p>{props.data.name}</p>
                <div className="flex items-center justify-between">
                    <p className="ml-2">【{props.data.plan.name}】</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Link to={props.data.uuid} className={'block whitespace-nowrap'}>
                    <MainButton value={'詳細'} color={'mainGreen'} type={'button'} size={'sm'}/>
                </Link>
            </div>
        </div>
    );
};

export default ListItem;
