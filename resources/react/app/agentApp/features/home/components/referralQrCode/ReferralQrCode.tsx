import React from 'react';
import {QRCodeCanvas} from 'qrcode.react';

const ReferralQrCode: React.FC<{linkUrl: string}> = ({linkUrl}) => {
	return (
		<div className={'mt-4'}>
			<QRCodeCanvas
				value={linkUrl}
				size={128}
				bgColor={"#000000"}
				fgColor={"#FFFFFF"}
				level={"L"}
				includeMargin={false}
				imageSettings={{
					src: '',
					x: 0,
					y: 0,
					height: 128,
					width: 128,
					excavate: true,
				}}
			/>
		</div>
	);
};

export default ReferralQrCode;
