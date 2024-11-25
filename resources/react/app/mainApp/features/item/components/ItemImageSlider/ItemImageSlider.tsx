import React from 'react';
import {ItemImageSliderType} from "./ItemImageSlider.type";
import ImageGallery from "react-image-gallery";
// import 'react-image-gallery/styles/css/image-gallery.css';

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
				original: img.image_path,
				thumbnail: img.image_path,
			})
		})
	}

	return (
		<ImageGallery
			items={imgs}
			showNav={false}
			autoPlay={true}
			showFullscreenButton={false}
			useBrowserFullscreen={false}
			showPlayButton={false}
			slideInterval={6000}
			slideDuration={1000}
		/>
	);
};

export default ItemImageSlider;
