import {atom} from "recoil";
import dayjs from "dayjs";

export const TradeHistoryDateStats = atom<string>({
	key: 'TradeHistoryDateStats',
	default: dayjs().format('YYYY-MM')
})
