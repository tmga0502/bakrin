import React from 'react';
import {ItemImageSliderType} from "./ItemImageSlider.type";
import {Wrapper} from './ItemImageSlider.styles';
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
		<div css={Wrapper}>
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

export default ItemImageSlider;
