type PlanType = {
    number      :number,
    name        :string,
    displayName :string,
    color       :string,
}

const Plan: PlanType[] = [
    {
        number: 1,
        name: 'お手軽プラン',
        displayName: 'お手軽',
        color: 'red',
    },
    {
        number: 2,
        name: 'おすすめプラン',
        displayName: 'おすすめ',
        color: 'blue',
    },
    {
        number: 3,
        name: '満足プラン',
        displayName: '満足',
        color: 'green',
    },
    {
        number: 4,
        name: '無制限プラン',
        displayName: '無制限',
        color: 'white',
    },
]

export {Plan}
