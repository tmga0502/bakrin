import React from 'react';
import {ItemImageType} from "@/ts/types/ItemImageType";
import ImageGallery from "react-image-gallery";
import {ItemShowImageType} from "@/ts/components/model/item/ItemShowImage/_type";

const ItemShowImage: React.FC<ItemShowImageType> = ({thumbnail, images}) => {
	const imgs = [
		{
			original: thumbnail,
			thumbnail: thumbnail,
		},
	]
	if(images !== undefined) {
		images.forEach((img) => {
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

export default ItemShowImage;
