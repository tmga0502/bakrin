import {atom} from "recoil";
import dayjs from "dayjs";
import { InvoiceType } from "@/react/types/InvoiceType";

export const InvoiceMonthStates = atom<string>({
	key: 'InvoiceMonthStates',
	default: dayjs().format('YYYY-MM')
})

export const InvoiceViewDataStates = atom<InvoiceType>({
	key: 'InvoiceViewDataStates',
	default: undefined
})
