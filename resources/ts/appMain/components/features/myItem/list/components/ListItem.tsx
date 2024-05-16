import React from 'react';
import {IconButton} from "@/ts/appMain/components/_ui/button/Button";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import {ListItemType} from "@/ts/appMain/components/features/myItem/list/type/Types";
import {GetPlanImage} from "@/ts/functions/GetPlanImage";

import {useNavigate} from "react-router-dom";

const ListItem = (props:ListItemType) => {
    const plan = GetPlanImage(props.planNumber)
    const planName = plan ? plan.name : 'お手軽プラン'
    const navigate = useNavigate()

    const handleLink = () => {
        navigate('edit/' + props.id)
    }

    return (
        <div className="flex items-center justify-between gap-6 bg-white border rounded-sm shadow p-4 mb-2">
            <div className="w-16 h-16">
                <img src="https://placehold.jp/400x230.png" className="w-full h-full object-cover" alt="item img"/>
            </div>
            <div className="flex items-center justify-between w-[calc(100%_-_156px)]">
                <p>{props.name}</p>
                <div className="flex items-center justify-between">
                    <p className="ml-2">【{planName}】</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <IconButton value={<MdOutlineEdit className="text-success text-3xl"/>} size={'sm'} onClick={handleLink}/>
                <IconButton value={<MdOutlineDeleteForever className="text-danger text-3xl"/>} size={'sm'}/>
            </div>
        </div>
    );
};

export default ListItem;
