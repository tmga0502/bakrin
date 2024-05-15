import {Plan} from "@/ts/_constants/Plan";

const GetPlanImage = (planNumber: number) => {
    let plan =  Plan.find(plan => plan.number === planNumber)
    if (plan === undefined){
        plan = {
            number: -1,
            name: 'デフォルトプラン',
            displayName: 'デフォルト',
            color: 'gray',
        }
    }
    return plan
}


export {
    GetPlanImage,
}
