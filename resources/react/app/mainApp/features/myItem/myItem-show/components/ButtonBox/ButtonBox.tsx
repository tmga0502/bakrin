import React from 'react';
import {ButtonBoxType} from "./ButtonBox.type";
import {BoxStyle, FlexStyle} from './ButtonBox.styles';
import DataDeleteModal from "@/react/app/mainApp/features/myItem/myItem-show/components/DataDeleteModal/DataDeleteModal";
import AddImageModal from "@/react/app/mainApp/features/myItem/myItem-show/components/AddImageModal/AddImageModal";
import LinkEditButton from "@/react/app/mainApp/features/myItem/myItem-show/components/LinkEditButton/LinkEditButton";

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
