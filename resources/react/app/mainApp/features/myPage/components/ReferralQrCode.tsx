import React from 'react';
import {QRCodeCanvas} from 'qrcode.react';
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

const ReferralQrCode = () => {
	const userData = useRecoilValue(IsAuthUserDataStates);
	return (
		<div className={'mt-4'}>
			<QRCodeCanvas
				value={'https://www.google.com'}
				size={128}
				bgColor={"#00BF63"}
				fgColor={"#FFFFFF"}
				level={"L"}
				includeMargin={false}
				imageSettings={{
					src: userData.thumbnail_path,
					x: undefined,
					y: undefined,
					height: 24,
					width: 24,
					excavate: true,
				}}
			/>
		</div>
	);
};

export default ReferralQrCode;
