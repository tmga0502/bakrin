import React from 'react';
import {ItemImageSliderType} from "./ItemImageSlider.type";
import ImageGallery from "react-image-gallery";

const ItemImageSlider: React.FC<ItemImageSliderType> = ({thumbnail, images}) => {
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
	);
};

export default ItemImageSlider;
