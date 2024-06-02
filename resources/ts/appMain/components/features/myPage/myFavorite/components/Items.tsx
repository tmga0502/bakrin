import React from 'react';
import {ItemListPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {useGetFavoriteItems} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";

const Items = () => {
    const { data, status} = useGetFavoriteItems()

    if(status === 'success') {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data.map((item)=>(
                    <ItemListPanel data={item} key={item.id}/>
                ))}
            </div>
        );
    }else{
        return <Loader/>
    }

};

export default Items;
