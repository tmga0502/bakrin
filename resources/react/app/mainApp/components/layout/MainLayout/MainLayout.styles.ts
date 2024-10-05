import {css} from "@emotion/react";
import {mq} from "@/react/app/mainApp/styles/mediaQuery";

const Wrapper = css`
	flex-direction: column;
	min-height: 100vh;
	min-width: 80%;
`

const Container = css`
	max-width: 1280px;
	min-width: 330px;
	margin: 0 auto;
	display: flex;
	min-height: calc(100vh - 120px);
`

const MainBox = css`
	width: 100%;
	padding: 16px;
	margin-bottom: 96px;
	${mq('md')}{
		width: calc(100% - 200px);
	}
`

export {
	Wrapper,
	Container,
	MainBox,
}
