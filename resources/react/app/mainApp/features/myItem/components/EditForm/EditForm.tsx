import React from 'react';
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {FileField, Input, Radio, SelectBox, TextArea} from "@mainElements/form";
import {Month, MonthPart} from "@/react/_constants/Date";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {EditPagePropsType} from "@mainFeatures/myItem/types";
import {useRecoilState, useSetRecoilState} from "recoil";
import {FormCategoryStates, FormVarietiesStates} from "@mainFeatures/myItem/states/formStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import {useUpdateItem} from "@/react/api/query/ItemQuery";

const EditForm: React.FC<EditPagePropsType> = (props) => {
	const {itemData, categoriesData, varietiesData, unitData, planData} = props
	const {register, handleSubmit, formState:{errors}, setValue} = useForm()
	const setFormCategoryStates = useSetRecoilState(FormCategoryStates)
	const [formVarietiesStates, setFormVarietiesStates] = useRecoilState(FormVarietiesStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const update = useUpdateItem()

	const handleCategoryChange = (e: any) => {
		const value = e.target.value
		if(value === ''){
			setFormVarietiesStates([])
		}{
			const varietyArray = varietiesData.filter(item => item.item_category_id === Number(value))
			setFormVarietiesStates(varietyArray)
			setValue('varietyId', 0)
		}
		setFormCategoryStates(e.target.value)
	}

	const onSubmit = (data: any) => {
		setIsLoading(true)
		update.mutate(data);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type={'hidden'} value={itemData.id} {...register('id')}/>
			<FormGroup>
				<FormLabel text={'カテゴリー'} htmlFor={'category'}/>
				<SelectBox optionObj={categoriesData} addBlankOption={true} defaultValue={itemData.item_category_id} {...register('categoryId', {required: '選択してください'})} onChange={(e: any)=> {
					handleCategoryChange(e)
				}}/>
				{errors.categoryId && (
					<ErrorMessage msg={errors.categoryId.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'種類'} htmlFor={'variety'}/>
				<SelectBox optionObj={formVarietiesStates} addBlankOption={true} defaultValue={itemData.item_variety_id} {...register('varietyId', {required: '選択してください'})}/>
				{errors.varietyId && (
					<ErrorMessage msg={errors.varietyId.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム名'} htmlFor={'name'}/>
				<Input id={'name'} {...register('name', {required: '入力してください'})} defaultValue={itemData.name}/>
				{errors.name && (
					<ErrorMessage msg={errors.name.message as string}/>
				)}
			</FormGroup>

			<div className={'flex items-center gap-2'}>
				<div className={'w-4/5'}>
					<FormGroup>
						<FormLabel text={'数量'} htmlFor={'count'}/>
						<Input id={'count'} type={'number'} defaultValue={itemData.count} {...register('count', {required: '入力してください'})}/>
						{errors.count && (
							<ErrorMessage msg={errors.count.message as string}/>
						)}
					</FormGroup>
				</div>
				<div className={'w-1/5'}>
					<FormGroup>
						<FormLabel text={'単位'} htmlFor={'unit'}/>
						<SelectBox optionObj={unitData} defaultValue={itemData.unit_id} {...register('unitId')}/>
					</FormGroup>
				</div>
			</div>

			<div className={'flex items-center gap-2'}>
				<div className={'w-4/5'}>
					<FormGroup>
						<FormLabel text={'目安数量'} htmlFor={'guideCount'}/>
						<Input id={'guideCount'} type={'number'} defaultValue={itemData.guide_count} {...register('guideCount', {required: '入力してください'})}/>
						{errors.guideCount && (
							<ErrorMessage msg={errors.guideCount.message as string}/>
						)}
					</FormGroup>
				</div>
				<div className={'w-1/5'}>
					<FormGroup>
						<FormLabel text={'目安単位'} htmlFor={'guideUnit'}/>
						<SelectBox optionObj={unitData} defaultValue={itemData.guide_unit_id} {...register('guideUnitId')}/>
					</FormGroup>
				</div>
			</div>

			<FormGroup>
				<FormLabel text={'プラン'} htmlFor={'plan'}/>
				<SelectBox optionObj={planData} addBlankOption={true} defaultValue={itemData.plan_id} {...register('planId', {required: '選択してください'})}/>
				{errors.planId && (
					<ErrorMessage msg={errors.planId.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム説明'} htmlFor={'description'}/>
				<TextArea id={'description'} rows={12} defaultValue={itemData.description} {...register('description')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'発送可能日'} htmlFor={''}/>
				<div className={'sm:flex sm:items-center sm:gap-2 sm:mb-0'}>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={Month} defaultValue={itemData.shipping_start} {...register('shippingStart')}/>
					</div>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={MonthPart} defaultValue={itemData.shipping_start_part} {...register('shippingStartPart')}/>
					</div>
					<span className={'block whitespace-nowrap mb-2 sm:mb-0'}>から</span>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={Month} defaultValue={itemData.shipping_end} {...register('shippingEnd')}/>
					</div>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={MonthPart} defaultValue={itemData.shipping_end_part} {...register('shippingEndPart')}/>
					</div>
				</div>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'公開設定'} htmlFor={''}/>
				<div className={'flex gap-6 items-center'}>
					<Radio text={'公開'} value={1} {...register('status')} defaultChecked={itemData.status === 1}/>
					<Radio text={'非公開'} value={0} {...register('status')} defaultChecked={itemData.status === 0}/>
				</div>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'サムネイル画像'} htmlFor={'thumbnail'}/>
				<FileField id={'thumbnail'} {...register('thumbnail')}/>
			</FormGroup>

			<p className={'text-xs font-bold'}>
				<span className={'text-danger'}>※【サムネイル画像を更新しない場合】<br/></span>
				上の「ファイルを選択」では何も選択せずに、以下の更新ボタンを押して情報の更新をしてください。
			</p>
			<div className={'text-center mt-6'}>
				<MainButton text={'登録'} color={'info'} type={'submit'} align={'center'} width={'half'}></MainButton>
			</div>


		</form>
	);
};

export default EditForm;
