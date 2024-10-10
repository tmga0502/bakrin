import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const ImageBoxWrapper = css`
	margin-bottom: 64px;
	${mq('sm')}{
		display: flex;
		gap: 48px;
		justify-content: space-between;
		align-items: center;
	}
`

const ArrowStyle = css`
	font-size: 72px;
	color: ${theme.color.dark};
	display: none;
	${mq('sm')}{
		display: block;
	}
`

export {
	ImageBoxWrapper,
	ArrowStyle,
}
