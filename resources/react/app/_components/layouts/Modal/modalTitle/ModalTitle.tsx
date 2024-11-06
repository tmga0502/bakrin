import React from "react";
import { ModalTitleType } from "./ModalTitle.type";
import {Wrapper} from './ModalTitle.styles'

const ModalTitle: React.FC<ModalTitleType> = ({title}) => {
	return(
		<div>
			<div css={Wrapper}>{title}</div>
		</div>
	)
}

export default ModalTitle
