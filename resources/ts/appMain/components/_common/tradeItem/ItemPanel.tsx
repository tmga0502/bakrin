import React from 'react';
import {Link} from "react-router-dom";
export type PanelType = {
    link: string,
    thumbnail: string,
    itemName: string,
    producerName: string,
    date: string,
    status?: number,
}


const ItemPanel = (props:PanelType) => {
    return (
        <Link to={props.link} className="flex items-center gap-4 max-w-[500px] min-w-[350px] mx-auto border rounded-md bg-white shadow mb-4 p-4">
            <div className="w-[120px] h-[120px]">
                <img src={props.thumbnail} className="w-full h-full object-cover" alt={props.itemName}/>
            </div>
            <div className="w-[calc(100%_-_120px_-_1rem)]">
                <p className="mb-2">{props.itemName}</p>
                <p className="text-right mb-4">{props.producerName}</p>
                <p className="text-right text-sm">申請日：{props.date}</p>
            </div>
        </Link>
    );
};

export default ItemPanel;
