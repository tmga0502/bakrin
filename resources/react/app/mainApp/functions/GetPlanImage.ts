import {Plan} from "@/react/_constants/Plan";

const GetPlanImage = (planId: number) => {
    let plan =  Plan.find(plan => plan.number === planId)
    if (plan === undefined){
        plan = {
            number: -1,
            name: '',
            displayName: '',
            color: 'white',
        }
    }
    return plan
}


export {
    GetPlanImage,
}
