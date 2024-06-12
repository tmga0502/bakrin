import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {ItemStatus, Month, MonthPart} from "@/ts/_constants/Date";
import {ItemType} from "@/ts/types/ItemType";
import {useGetCategories} from "@/ts/_api/query/CategoryQuery";
import {useGetUnits} from "@/ts/_api/query/UnitQuery";
import {useGetPlans} from "@/ts/_api/query/PlanQuery";
import {useUpdateItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import {FileField, InputField, SelectField, TextAreaField} from "@/ts/components/ui/form";
import FormLabel from "@/ts/components/ui/form/FormLabel";
import FormGroup from "@/ts/components/ui/form/FormGroup";
import {MainButton} from "@/ts/components/ui/button";

const Form = (props: {data:ItemType}) => {
    const {data: categoryData, status:categoryStatus} = useGetCategories();
    const {data: unitData, status:unitStatus} = useGetUnits();
    const {data: planData, status:planStatus} = useGetPlans();
    const methods = useForm({defaultValues:props.data});
    const { handleSubmit} = methods;
	const update = useUpdateItem();

    const onSubmit = (data:any) => {
        update.mutate(data);
    }

	if(categoryData === undefined || unitData === undefined || planData === undefined) return <Loader/>

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

				<FormLabel label={'発送可能日'} htmlFor={''}/>
				<div className={'flex items-center justify-self-auto gap-2'}>
					<SelectField label={''} id={'shippingStart'} optionObj={Month} defaultValue={props.data.shippingStart}/>
					<SelectField label={''} id={'shippingStartPart'} optionObj={MonthPart} defaultValue={props.data.shippingStartPart}/>
					<span className="whitespace-nowrap mb-6">から</span>
					<SelectField label={''} id={'shippingEnd'} optionObj={Month} defaultValue={props.data.shippingEnd}/>
					<SelectField label={''} id={'shippingEndPart'} optionObj={MonthPart} defaultValue={props.data.shippingEndPart}/>
				</div>

				<SelectField label={'公開設定'} id={'status'} optionObj={ItemStatus} defaultValue={props.data.status}/>

				<FileField label={'サムネイル画像'} id={'thumbnail'} helper={'更新が不要な場合は、何も選択しないでください'}/>

				<FormGroup>
					<div className="mt-12 text-center">
						<MainButton value={'更新'} color={'info'} type={'submit'} size={'sm'} width={'half'}/>
					</div>
				</FormGroup>
			</form>
		</FormProvider>
	)
};

export default Form;
