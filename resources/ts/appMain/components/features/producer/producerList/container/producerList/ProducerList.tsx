import React from 'react';
import {ProducerPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {ProducerType} from "@/ts/types/ProducerType";

const ProducerList = (data:any) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.map((producer: ProducerType) => (
                <ProducerPanel data={producer} key={producer.id}/>
            ))}
        </div>
    );
};

export default ProducerList;
