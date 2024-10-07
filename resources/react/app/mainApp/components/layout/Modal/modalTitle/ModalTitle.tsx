import React from "react";
import { ModalTitleType } from "./ModalTitle.type";
import {Wrapper} from './ModalTitle.styles'

const ModalTitle: React.FC<ModalTitleType> = ({title}) => {
	return(
		<div css={Wrapper}>{title}</div>
	)
}

export default ModalTitle
