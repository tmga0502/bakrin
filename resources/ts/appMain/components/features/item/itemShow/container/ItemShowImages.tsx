import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {ItemImageType} from "@/ts/types/ItemImageType";

const ItemShowImages = (props: { thumbnail:string, images:ItemImageType[] | undefined }) => {
    const imgs = [
        {
            original: props.thumbnail,
            thumbnail: props.thumbnail,
        },
    ]
    if(props.images !== undefined) {
        props.images.forEach((img) => {
            imgs.push({
                original: img.path,
                thumbnail: img.path,
            })
        })
    }

    return (
        <div className="min-w-full">
            <ImageGallery
                items={imgs}
                showNav={false}
                autoPlay={true}
                showFullscreenButton={true}
                useBrowserFullscreen={false}
                showPlayButton={false}
                slideInterval={6000}
                slideDuration={1000}
            />
        </div>
    );
};

export default ItemShowImages;
