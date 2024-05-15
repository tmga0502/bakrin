import React from 'react';
import {ItemListPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";

const Items = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={1} link={'/items/1'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={2} link={'/items/2'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={3} link={'/items/3'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={2} link={'/items/4'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={4} link={'/items/5'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={3} link={'/items/6'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={1} link={'/items/7'}/>
            <ItemListPanel src={'https://placehold.jp/400x230.png'} alt={'image'} planNumber={2} link={'/items/8'}/>
        </div>
    );
};

export default Items;
