import React from 'react';
import {ProducerPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";

const ProducerList = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ProducerPanel link={'/producers/1'} name={'テスト'} address={'東京都~~'} img={'https://placehold.jp/400x230.png'}/>
        </div>
    );
};

export default ProducerList;
