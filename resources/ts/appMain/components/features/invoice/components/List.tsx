import React from 'react';
import { MdFileDownload } from "react-icons/md";

const List = (props:{date:string}) => {
    return (
        <div className="w-full border rounded-md bg-white p-4 flex justify-between items-center mb-2 shadow-md hover:opacity-80 hover:cursor-pointer">
            <p className="m-0">{props.date}</p>
            <MdFileDownload className="text-xl"/>
        </div>
    );
};

export default List;
