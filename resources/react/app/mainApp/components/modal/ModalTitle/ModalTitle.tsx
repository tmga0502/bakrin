import React from "react";
import { ModalTitleType } from "./ModalTitle.type";

const ModalTitle: React.FC<ModalTitleType> = ({title}) => {
	return(
		<div className={'p-4 border-b'}>{title}</div>
	)
}

export default ModalTitle
