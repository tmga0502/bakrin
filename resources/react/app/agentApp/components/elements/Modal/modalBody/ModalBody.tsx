import React, {ReactNode} from "react";

type ModalBodyType = {
	children: ReactNode
}

const ModalBody: React.FC<ModalBodyType> = ({children}) => {
	return(
		<div className={'p-4'}>{children}</div>
	)
}

export default ModalBody
