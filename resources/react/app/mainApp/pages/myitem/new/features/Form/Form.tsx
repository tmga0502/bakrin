import React, {useState} from 'react';
import {FormProvider, useFieldArray, useForm} from "react-hook-form";
import {ItemStatus, Month, MonthPart} from "@/react/_constants/Date";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {useGetUnits} from "@/react/api/query/UnitQuery";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import {FileField, InputField, SelectField, TextAreaField} from "@/react/app/mainApp/components/elements/form";
import {FormGroup, FormLabel} from "@/react/app/mainApp/components/layout/form";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";

const Form = () => {
	const {data: categoryData} = useGetCategories();
	const {data: unitData} = useGetUnits();
	const {data: planData} = useGetPlans();
	const methods = useForm({
		defaultValues: {
			img_paths: [{img_pathValue: ""}]
		}
	})
	const {register, handleSubmit, control} = methods

	const {fields, append, remove} = useFieldArray({
		control,
		name: "img_paths"
	});
	const [count, setCount] = useState(0);
	const countUp = () => setCount(count + 1);

	const reduce = () => {
		if (count > 0) {
			remove(count);
			setCount(count - 1);
		}
	};

	const onSubmit = (data: any) => {
		console.log(data);
	}

	if (categoryData === undefined || unitData === undefined || planData === undefined) return <Loader/>

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<SelectField label={'カテゴリー'} id={'category'} optionObj={categoryData}/>
				<InputField label={'アイテム名'} id={'name'} type={'text'} required={true}/>
				<div className="flex gap-2">
					<InputField label={'数量'} id={'count'} type={'number'}/>
					<SelectField label={'単位'} id={'unit'} optionObj={unitData}/>
				</div>
				<div className="flex gap-2">
					<InputField label={'目安数量'} id={'guideCount'} type={'number'}/>
					<SelectField label={'目安単位'} id={'guideUnit'} optionObj={unitData}/>
				</div>
				<SelectField label={'プラン'} id={'plan'} optionObj={planData}/>
				<TextAreaField label={'商品説明'} id={'description'}/>

				<FormLabel text={'発送可能日'} htmlFor={''}/>
				<div className={'flex items-center justify-self-auto gap-2'}>
					<SelectField label={''} id={'shippingStart'} optionObj={Month}/>
					<SelectField label={''} id={'shippingStartPart'} optionObj={MonthPart}/>
					<span className="whitespace-nowrap mb-6">から</span>
					<SelectField label={''} id={'shippingEnd'} optionObj={Month}/>
					<SelectField label={''} id={'shippingEndPart'} optionObj={MonthPart}/>
				</div>

				<SelectField label={'公開設定'} id={'status'} optionObj={ItemStatus}/>

				<FileField label={'サムネイル画像'} id={'thumbnail'}/>


				{fields.map((field, index) => (
					<FormGroup key={field.id}>
						<FormLabel text={'アイテム画像'} htmlFor={`img_paths.${index}.img_pathValue`}/>
						<input type={'file'} className={'fileStyle'} {...register(`img_paths.${index}.img_pathValue`)} />
					</FormGroup>
				))}
				<div className="flex gap-4 justify-end">
					<MainButton value={'画像を追加'} color={'info'} type={'button'} size={'sm'} onClick={() => [append({img_pathValue: ""}), countUp()]}/>
					<MainButton value={'画像を削除'} color={'info'} type={'button'} size={'sm'} onClick={reduce}/>
				</div>

				<FormGroup>
					<div className="mt-12">
						<MainButton value={'登録'} color={'info'} type={'submit'} size={'md'} width={'full'}/>
					</div>
				</FormGroup>
			</form>
		</FormProvider>
	)
};

export default Form;
