import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "@/ts/hooks/AuthContext";
import {ItemType} from "@/ts/types/ItemType";
import { useItemShowMode } from '../../hooks/ItemContext';
import {RadioBox} from "@/ts/components/ui/form";
import {MainButton} from "@/ts/components/ui/button";

const RequestForm = () => {
    const {setMode} = useItemShowMode()
	const { userData } = useAuth()
	console.log(userData)
    return (
        <div className="mt-8">
            <p>【交換に出すアイテムを選択してください】</p>
            <div className="my-8">
				{userData.items.map((item:ItemType) => (
                	<RadioBox id={item.id} label={`${item.name}(${item.count}${item.unit.name})【${item.plan.name}】`} name={'myPlan'} key={item.id}/>
				))}
            </div>

            <div className="block text-center mt-8 mb-4">
                <Link to={''}>
                    <MainButton type={'button'} color={'mainGreen'} width={'half'} value={'申請する'}/>
                </Link>

                <div className="mt-8">
                    <MainButton type={'button'} color={'dark'} value={'戻る'} width={'half'} onClick={()=>setMode('view')}/>
                </div>
            </div>
        </div>
    );
};

export default RequestForm;
