import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {ItemStatus, Month, MonthPart} from "@/react/_constants/Date";
import {useUpdateItem} from "@/react/api/query/ItemQuery";
import {FileField, InputField, SelectField, TextAreaField} from "@/react/app/mainApp/components/form";
import FormLabel from "@/react/app/mainApp/components/form/FormLabel/FormLabel";
import FormGroup from "@/react/app/mainApp/components/form/FormGroup/FormGroup";
import {MainButton} from "@/react/app/mainApp/components/button";
import { FormType } from './Form.type';

const Form: React.FC<FormType> = ({itemData, categoryData, unitData, planData }) => {
    const methods = useForm({defaultValues:itemData});
    const { handleSubmit} = methods;
	const update = useUpdateItem();

    const onSubmit = (data:any) => {
        update.mutate(data);
    }

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<SelectField label={'カテゴリー'} id={'categoryId'} optionObj={categoryData} defaultValue={itemData.categoryId}/>
				<InputField label={'アイテム名'} id={'name'} type={'text'} reqred={true}/>
				<div className={'flex gap-2'}>
					<div className={'w-1/2'}>
						<InputField label={'数量'} id={'count'} type={'text'}/>
					</div>
					<div className={'w-1/2'}>
						<SelectField label={'単位'} id={'unitId'} optionObj={unitData} defaultValue={itemData.unitId}/>
					</div>
				</div>
				<div className={'flex gap-2'}>
					<div className={'w-1/2'}>
						<InputField label={'目安数量'} id={'guideCount'} type={'text'}/>
					</div>
					<div className={'w-1/2'}>
						<SelectField label={'単位'} id={'guideUnitId'} optionObj={unitData} defaultValue={itemData.guideUnitId}/>
					</div>
				</div>

				<SelectField label={'プラン'} id={'planId'} optionObj={planData} defaultValue={itemData.planId}/>

				<TextAreaField label={'商品説明'} id={'description'} rows={10} defaultValue={itemData.description}/>

				<FormLabel label={'発送可能日'} htmlFor={''}/>
				<div className={'flex items-center justify-self-auto gap-2'}>
					<SelectField label={''} id={'shippingStart'} optionObj={Month} defaultValue={itemData.shippingStart}/>
					<SelectField label={''} id={'shippingStartPart'} optionObj={MonthPart} defaultValue={itemData.shippingStartPart}/>
					<span className="whitespace-nowrap mb-6">から</span>
					<SelectField label={''} id={'shippingEnd'} optionObj={Month} defaultValue={itemData.shippingEnd}/>
					<SelectField label={''} id={'shippingEndPart'} optionObj={MonthPart} defaultValue={itemData.shippingEndPart}/>
				</div>

				<SelectField label={'公開設定'} id={'status'} optionObj={ItemStatus} defaultValue={itemData.status}/>

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
