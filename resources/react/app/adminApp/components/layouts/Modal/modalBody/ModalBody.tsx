import React from "react";
import { ModalBodyType } from "./ModalBody.type";
import {Wrapper} from './ModalBody.styles'

const ModalBody: React.FC<ModalBodyType> = ({children}) => {
	return(
		<div css={Wrapper}>{children}</div>
	)
}

export default ModalBody
