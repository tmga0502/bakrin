import {css} from "@emotion/react";
import {theme} from "@/react/app/mainApp/styles/Theme";

const Container = css`
	display: flex;
	border-bottom: 1px solid ${theme.color.gray};
	gap: 16px;
	margin-bottom: 24px;
`

const TabItem = (active: boolean) => {
	const BgColor = active ? theme.color.mainGreen : theme.color.white;
	const Color = active ? theme.color.white : theme.color.dark;

	return css`
		border: 1px solid ${theme.color.gray};
		border-radius: 8px 8px 0 0;
		padding: 8px 16px;
		color: ${Color};
		background-color: ${BgColor};
		&:hover{
			cursor: pointer;
			opacity: 0.8;
		}
	`
}

export {
	Container,
	TabItem,
}
