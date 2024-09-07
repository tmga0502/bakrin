import React from "react";
import { ModalBodyType } from "./ModalBody.type";

const ModalBody: React.FC<ModalBodyType> = ({children}) => {
	return(
		<div className={'p-4'}>{children}</div>
	)
}

export default ModalBody
