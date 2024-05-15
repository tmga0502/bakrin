import React from 'react';
import {RadioBox} from "@/ts/appMain/components/_ui/form/Form";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {Link} from "react-router-dom";

const RequestForm = () => {
    return (
        <div className="mt-8">
            <p>【交換に出すアイテムを選択してください】</p>
            <div className="my-8">
                <RadioBox id={'goldPlan'} label={'鮭(3匹)【満足プラン】'} name={'plan'}/>
                <RadioBox id={'silverPlan'} label={'鮭(2匹)【おすすめプラン】'} name={'plan'}/>
                <RadioBox id={'blondsPlan'} label={'鮭(1匹)【お手軽プラン】'} name={'plan'}/>
                <RadioBox id={'blackPlan'} label={'鮭【無制限プラン】'} name={'plan'}/>
            </div>

            <div className="block text-center mt-8 mb-4">
                <Link to={''}>
                    <MainButton type={'button'} color={'mainGreen'} value={'申請する'}/>
                </Link>
            </div>
        </div>
    );
};

export default RequestForm;
