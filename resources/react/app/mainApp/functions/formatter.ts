import {PhoneNumber, PhoneNumberFormat, PhoneNumberUtil} from "google-libphonenumber";

//電話番号をハイフン付きに変換
function createPhoneNumber(phoneNumber: string){
    if(phoneNumber == null || phoneNumber === '') {
        return ''
    }
    // 日本の国コード
    const region = 'JP';

    const util:PhoneNumberUtil = PhoneNumberUtil.getInstance();

    // 番号と地域を設定
    const number:PhoneNumber = util.parseAndKeepRawInput(phoneNumber, region);

    // 電話番号の有効性チェック
    if (!util.isValidNumberForRegion(number, region)) {
        return phoneNumber;
    }

    // ハイフン付きの形式で返却
    return util.format(number, PhoneNumberFormat.NATIONAL);
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

//日付の計算
function formatDate(date: string){
	const padZero = (num: number) => {
		return num < 10 ? `0${num}` : String(num);
	};
	const dt = new Date(date);
	const year = dt.getFullYear();
	const month = dt.getMonth() + 1; // 月は0から始まるので +1 する
	const day = dt.getDate();
	const hour = padZero(dt.getHours());
	const minute = padZero(dt.getMinutes());
	return `${year}年${month}月${day}日 ${hour}:${minute}`;
}

function createImageUrl(filePath: string){
	if (filePath === '' || filePath == null){
		return filePath;
	}
	if (filePath.includes("http://") || filePath.includes("https://")) {
		return filePath;
	}
	return `${window.location.origin}/${filePath}`
}


export {
    createPhoneNumber,
    createPostalCode,
    withComma,
	formatDate,
	createImageUrl,
}
