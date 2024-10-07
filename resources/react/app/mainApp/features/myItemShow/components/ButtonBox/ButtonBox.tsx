import React from 'react';
import {ButtonBoxType} from "./ButtonBox.type";
import {BoxStyle, FlexStyle} from './ButtonBox.styles';
import LinkEditButton from "@/react/app/mainApp/features/myItemShow/components/LinkEditButton/LinkEditButton";
import AddImageModal from "@/react/app/mainApp/features/myItemShow/components/AddImageModal/AddImageModal";
import DataDeleteModal from "@/react/app/mainApp/features/myItemShow/components/DataDeleteModal/DataDeleteModal";

const ButtonBox: React.FC<ButtonBoxType> = () => {
	return (
		<div css={BoxStyle}>
			<DataDeleteModal/>
			<div css={FlexStyle}>
				<AddImageModal/>
				<LinkEditButton/>
			</div>
		</div>
	);
};

export default ButtonBox;
