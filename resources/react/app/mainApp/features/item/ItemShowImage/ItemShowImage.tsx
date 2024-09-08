import React from 'react';
import ImageGallery from "react-image-gallery";
import {ItemShowImageType} from "@/react/app/mainApp/features/item/ItemShowImage/ItemShowImage.type";

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
