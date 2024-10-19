import {css} from "@emotion/react";
import {CommonInputStyle} from "@/react/app/mainApp/components/elements/form/_common/common.styled";
import {theme} from "@/react/app/mainApp/styles/Theme";

const FileInputStyle = css`
	${CommonInputStyle};
	&::file-selector-button{
		background-color: ${theme.color.mainGreen};
		color: ${theme.color.white};
		border: none;
		border-radius: 8px;
		padding: 4px 8px;
		margin-right: 16px;
		font-size: 12px;
		&:hover{
			cursor: pointer;
		}
	}
`

export {
	FileInputStyle,
}
