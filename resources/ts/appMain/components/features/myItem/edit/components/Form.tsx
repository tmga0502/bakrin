import React, {useState} from 'react';
import {FormProvider, useFieldArray, useForm} from "react-hook-form";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {FileField, FormGroup, FormLabel, InputField, SelectField, TextAreaField} from "@/ts/appMain/components/_ui/form/Form";
import {ItemStatus, Month, MonthPart} from "@/ts/_constants/Date";
import {ItemType} from "@/ts/types/ItemType";
import {useGetCategories} from "@/ts/_api/query/CategoryQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";
import {useGetUnits} from "@/ts/_api/query/UnitQuery";
import {useGetPlans} from "@/ts/_api/query/PlanQuery";

const Form = (props: {data:ItemType}) => {
    const {data: categoryData, status:categoryStatus} = useGetCategories();
    const {data: unitData, status:unitStatus} = useGetUnits();
    const {data: planData, status:planStatus} = useGetPlans();
    const methods = useForm({defaultValues:props.data});
    const { handleSubmit, control} = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        name: "images"
    });
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count + 1);

    const reduce = () => {
        if (count > 0) {
            remove(count);
            setCount(count - 1);
        }
    };

    const onSubmit = (data:any) => {
        console.log(data);
    }
    console.log(unitData)
    if(categoryStatus === 'success' && unitStatus === 'success' && planStatus === 'success'){
        console.log(categoryData)
        return (
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SelectField label={'カテゴリー'} id={'categoryId'} optionObj={categoryData} defaultValue={props.data.categoryId}/>
                    <InputField label={'アイテム名'} id={'name'} type={'text'} required={true}/>
                    <div className={'flex gap-2'}>
                        <div className={'w-1/2'}>
                            <InputField label={'数量'} id={'count'} type={'text'}/>
                        </div>
                        <div className={'w-1/2'}>
                            <SelectField label={'単位'} id={'unitId'} optionObj={unitData} defaultValue={props.data.unitId}/>
                        </div>
                    </div>
                    <div className={'flex gap-2'}>
                        <div className={'w-1/2'}>
                            <InputField label={'目安数量'} id={'guideCount'} type={'text'}/>
                        </div>
                        <div className={'w-1/2'}>
                            <SelectField label={'単位'} id={'guideUnitId'} optionObj={unitData} defaultValue={props.data.guideUnitId}/>
                        </div>
                    </div>

                    <SelectField label={'プラン'} id={'planId'} optionObj={planData} defaultValue={props.data.planId}/>

                    <TextAreaField label={'商品説明'} id={'description'} rows={10} defaultValue={props.data.description}/>

                    <FormLabel label={'発送可能日'} for={''}/>
                    <div className={'flex items-center justify-self-auto gap-2'}>
                        <SelectField label={''} id={'shippingStart'} optionObj={Month} defaultValue={props.data.shippingStart}/>
                        <SelectField label={''} id={'shippingStartPart'} optionObj={MonthPart} defaultValue={props.data.shippingStartPart}/>
                        <span className="whitespace-nowrap mb-6">から</span>
                        <SelectField label={''} id={'shippingEnd'} optionObj={Month} defaultValue={props.data.shippingEnd}/>
                        <SelectField label={''} id={'shippingEndPart'} optionObj={MonthPart} defaultValue={props.data.shippingEndPart}/>
                    </div>

                    <SelectField label={'公開設定'} id={'status'} optionObj={ItemStatus} defaultValue={props.data.status}/>


                    {fields.map((field, index) => (
                        <FileField label={'アイテム画像'} id={`img_paths.${index}.img_pathValue`} key={index}/>
                    ))}
                    <div className="flex gap-4 justify-end">
                        <MainButton value={'画像を追加'} color={'info'} type={'button'} size={'sm'} onClick={() => [append({ img_pathValue: "" }), countUp()]}/>
                        <MainButton value={'画像を削除'} color={'info'} type={'button'} size={'sm'} onClick={reduce}/>
                    </div>

                    <FormGroup>
                        <div className="mt-12 text-center">
                            <MainButton value={'登録'} color={'info'} type={'submit'} size={'sm'} width={'half'}/>
                        </div>
                    </FormGroup>
                </form>
            </FormProvider>
    );
    } else {
        return <Loader/>
    }
};

export default Form;
