import React, {forwardRef} from 'react';
import {MessageBlockType} from "./MessageBlock.type";
import {ImageStyle, ImageWrapper, MessageBox, NameStyle, UserInfoBox, Wrapper} from './MessageBlock.styles';

const MessageBlock =  forwardRef<HTMLDivElement | null, MessageBlockType>((props, ref) => {
	const {imgPath, name, text, layout} = props;
	return (
		<div css={Wrapper(layout)} ref={ref}>
			<div css={UserInfoBox}>
				<div css={ImageWrapper}>
					<img src={imgPath} css={ImageStyle} alt={name}/>
				</div>
				<p css={NameStyle}>{name}</p>
			</div>

			{text.split('\n').map((line, index) => (
				<p css={MessageBox} key={index}>
					{line}
					<br/>
				</p>
			))}
		</div>
	);
});

export default MessageBlock;
