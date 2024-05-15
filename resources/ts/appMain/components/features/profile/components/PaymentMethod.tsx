import React from 'react';
import {RadioBox} from "@/ts/appMain/components/_ui/form/Form";
import {SubmitButton} from "@/ts/appMain/components/_ui/button/Button";

const PaymentMethod = () => {
    return (
        <div className="w-full bg-white p-4 mt-6">
            <p className="border-b-2 pb-2 mb-4">支払い方法変更</p>
            <RadioBox label={'銀行振込'} name={'paymentMethod'} id={'bank'}/>
            <RadioBox label={'クレジットカード'} name={'paymentMethod'} id={'creditCard'}/>

            <div className="text-center">
                <SubmitButton value={'変更'}/>
            </div>
        </div>
    );
};

export default PaymentMethod;
