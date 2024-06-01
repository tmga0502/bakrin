import React from 'react';
import {ProducerPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {useGetFavoriteProducers} from "@/ts/_api/query/ProducerQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";

const Producers = () => {
    const { data, status} = useGetFavoriteProducers()

    if(status === 'success'){
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data.map(producer => (
                    <ProducerPanel data={producer} key={producer.id}/>
                ))}
            </div>
        );
    }else{
        <Loader/>
    }

};

export default Producers;
