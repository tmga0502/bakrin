import React from 'react';
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {FileField, Input, Radio, SelectBox, TextArea} from "@mainElements/form";
import {Month, MonthPart} from "@/react/_constants/Date";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {useCreateItem} from "@/react/api/query/ItemQuery";
import {NewPagePropsType} from "@mainFeatures/myItem/types";
import {useRecoilState, useSetRecoilState} from "recoil";
import {FormCategoryStates, FormVarietiesStates} from "@mainFeatures/myItem/states/formStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const CreateForm: React.FC<NewPagePropsType> = (props) => {
	const {categoriesData, varietiesData, unitData, planData} = props
	const {register, handleSubmit, formState:{errors}, setValue} = useForm()
	const setFormCategoryStates = useSetRecoilState(FormCategoryStates)
	const [formVarietiesStates, setFormVarietiesStates] = useRecoilState(FormVarietiesStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const create = useCreateItem()

	const handleCategoryChange = (e: any) => {
		const value = e.target.value
		if(value === ''){
			setFormVarietiesStates([])
		}{
			const varietyArray = varietiesData.filter(item => item.item_category_id === Number(value))
			setFormVarietiesStates(varietyArray)
			setValue('varietyId', '')
		}
		setFormCategoryStates(e.target.value)
	}

	const onSubmit = (data: any) => {
		setIsLoading(true)
		create.mutate(data);
	}


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<FormLabel text={'カテゴリー'} htmlFor={'category'}/>
				<SelectBox optionObj={categoriesData} addBlankOption={true} {...register('item_category_id', {required: '選択してください'})} onChange={(e: any)=> {
					handleCategoryChange(e)
				}}/>
				{errors.item_category_id && (
					<ErrorMessage msg={errors.item_category_id.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'種類'} htmlFor={'variety'}/>
				<SelectBox optionObj={formVarietiesStates} addBlankOption={true} {...register('item_variety_id', {required: '選択してください'})}/>
				{errors.item_variety_id && (
					<ErrorMessage msg={errors.item_variety_id.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム名'} htmlFor={'name'}/>
				<Input id={'name'} {...register('name', {required: '入力してください'})}/>
				{errors.name && (
					<ErrorMessage msg={errors.name.message as string}/>
				)}
			</FormGroup>

			<div className={'flex items-center gap-2'}>
				<div className={'w-4/5'}>
					<FormGroup>
						<FormLabel text={'数量'} htmlFor={'count'}/>
						<Input id={'count'} type={'number'} {...register('count', {required: '入力してください'})}/>
						{errors.count && (
							<ErrorMessage msg={errors.count.message as string}/>
						)}
					</FormGroup>
				</div>
				<div className={'w-1/5'}>
					<FormGroup>
						<FormLabel text={'単位'} htmlFor={'unit'}/>
						<SelectBox optionObj={unitData} {...register('unit_id')}/>
					</FormGroup>
				</div>
			</div>

			<div className={'flex items-center gap-2'}>
				<div className={'w-4/5'}>
					<FormGroup>
						<FormLabel text={'目安数量'} htmlFor={'guide_count'}/>
						<Input id={'guide_count'} type={'number'} {...register('guide_count', {required: '入力してください'})}/>
						{errors.guide_count && (
							<ErrorMessage msg={errors.guide_count.message as string}/>
						)}
					</FormGroup>
				</div>
				<div className={'w-1/5'}>
					<FormGroup>
						<FormLabel text={'目安単位'} htmlFor={'guide_unit'}/>
						<SelectBox optionObj={unitData} {...register('guide_unit_id')}/>
					</FormGroup>
				</div>
			</div>

			<FormGroup>
				<FormLabel text={'プラン'} htmlFor={'plan'}/>
				<SelectBox optionObj={planData} addBlankOption={true} {...register('plan_id', {required: '選択してください'})}/>
				{errors.plan_id && (
					<ErrorMessage msg={errors.plan_id.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム説明'} htmlFor={'description'}/>
				<TextArea id={'description'} rows={12} {...register('description')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'発送可能日'} htmlFor={''}/>
				<div className={'sm:flex sm:items-center sm:gap-2 sm:mb-0'}>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={Month} {...register('shipping_start')}/>
					</div>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={MonthPart} {...register('shipping_start_part')}/>
					</div>
					<span className={'block whitespace-nowrap mb-2 sm:mb-0'}>から</span>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={Month} {...register('shipping_end')}/>
					</div>
					<div className={'mb-2 sm:mb-0'}>
						<SelectBox optionObj={MonthPart} {...register('shipping_end_part')}/>
					</div>
					</div>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'公開設定'} htmlFor={''}/>
				<div className={'flex gap-6 items-center'}>
					<Radio text={'公開'} value={1} {...register('status')} defaultChecked={true}/>
					<Radio text={'非公開'} value={0} {...register('status')}/>
				</div>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'サムネイル画像'} htmlFor={'thumbnail'}/>
				<FileField id={'thumbnail'} {...register('thumbnail', {required: '選択してください'})}/>
				{errors.thumbnail && (
					<ErrorMessage msg={errors.thumbnail.message as string}/>
				)}
			</FormGroup>

			<p className={'text-xs font-bold'}>
				<span className={'text-danger'}>※【その他に画像を登録する場合】<br/></span>
				一度このアイテムを登録後、アイテム詳細ページより追加してください。
			</p>
			<div className={'text-center mt-6'}>
				<MainButton text={'登録'} color={'info'} type={'submit'} align={'center'} width={'half'}></MainButton>
			</div>


		</form>
	);
};

export default CreateForm;
