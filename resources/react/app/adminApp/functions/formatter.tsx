import {PhoneNumber, PhoneNumberFormat, PhoneNumberUtil} from "google-libphonenumber";
import React from "react";

//電話番号をハイフン付きに変換
function createPhoneNumber(phoneNumber: string){
    if(phoneNumber == null) {
        return ''
    }
	// 日本の国コード
	const region = 'JP';

	try {
		const util: PhoneNumberUtil = PhoneNumberUtil.getInstance();
		// 番号と地域を設定
		const number: PhoneNumber = util.parseAndKeepRawInput(phoneNumber, region);

		// 電話番号の有効性チェック
		if (!util.isValidNumberForRegion(number, region)) {
			return '';
		}

		// ハイフン付きの形式で返却
		return util.format(number, PhoneNumberFormat.NATIONAL);
	} catch (error) {
		// parse中に例外が発生した場合
		return '';
	}
}

//郵便番号をハイフン付きに
function createPostalCode(postalCode: string){
    if(postalCode == null) {
        return ''
    }
    const first = postalCode.slice(0, 3)
    const end = postalCode.slice(3, 7)
    return '〒' + first + '-' + end
}

//数字をカンマ区切りに
function withComma(number: string){
    if(number == null) { return ''}
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//改行付きに変換
function formatBr(data: string){
	return(
		data.split('\n').map((line: string, index: number) => (
			<React.Fragment key={index}>
				{line}
				<br />
			</React.Fragment>
		))
	)
}


export {
    createPhoneNumber,
    createPostalCode,
    withComma,
	formatBr,
}
