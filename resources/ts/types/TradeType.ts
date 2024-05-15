export type TradeType = {
    id                    : number,
    status                : 'requested' | 'uncompleted' | 'completed' | 'rejected',
    my_uuid               : string, //自分
    producer_uuid         : string, //取引相手
    my_shipping_date      : string | null, //自分の発送日
    producer_shipping_date: string | null, //相手の発送日
    rejected_reason       : string | null //取引拒否理由
}
