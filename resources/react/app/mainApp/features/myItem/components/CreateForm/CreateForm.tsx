import React from 'react';
import {ButtonBox, CautionStyle, Flex, MonthFlex, RadioGroup} from './CreateForm.styles';
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {FileField, Input, Radio, SelectBox, TextArea} from "@mainElements/form";
import {Month, MonthPart} from "@/react/_constants/Date";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {useCreateItem} from "@/react/api/query/ItemQuery";
import {NewPagePropsType} from "@mainFeatures/myItem/types";

const CreateForm: React.FC<NewPagePropsType> = (props) => {
	const {categoriesData, varietiesData, unitData, planData} = props
	const {register, handleSubmit, formState:{errors}} = useForm()
	const create = useCreateItem()

	const onSubmit = (data: any) => {
		create.mutate(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<FormLabel text={'カテゴリー'} htmlFor={'category'}/>
				<SelectBox optionObj={categoriesData} {...register('categoryId')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'種類'} htmlFor={'variety'}/>
				<SelectBox optionObj={varietiesData} {...register('varietyId')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム名'} htmlFor={'name'}/>
				<Input id={'name'} {...register('name', {required: '入力してください'})}/>
				{errors.name && (
					<ErrorMessage msg={errors.name.message as string}/>
				)}
			</FormGroup>

			<div css={Flex}>
				<FormGroup>
					<FormLabel text={'数量'} htmlFor={'count'}/>
					<Input id={'count'} type={'number'} {...register('count', {required: '入力してください'})}/>
					{errors.count && (
						<ErrorMessage msg={errors.count.message as string}/>
					)}
				</FormGroup>
				<FormGroup>
					<FormLabel text={'単位'} htmlFor={'unit'}/>
					<SelectBox optionObj={unitData} {...register('unitId')}/>
				</FormGroup>
			</div>

			<div css={Flex}>
				<FormGroup>
					<FormLabel text={'目安数量'} htmlFor={'guideCount'}/>
					<Input id={'guideCount'} type={'number'} {...register('guideCount', {required: '入力してください'})}/>
					{errors.guideCount && (
						<ErrorMessage msg={errors.guideCount.message as string}/>
					)}
				</FormGroup>
				<FormGroup>
					<FormLabel text={'目安単位'} htmlFor={'guideUnit'}/>
					<SelectBox optionObj={unitData} {...register('guideUnitId')}/>
				</FormGroup>
			</div>

			<FormGroup>
				<FormLabel text={'プラン'} htmlFor={'plan'}/>
				<SelectBox optionObj={planData} {...register('planId')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム説明'} htmlFor={'description'}/>
				<TextArea id={'description'} rows={12} {...register('description')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'発送可能日'} htmlFor={''}/>
				<div css={MonthFlex}>
					<SelectBox optionObj={Month} {...register('shippingStart')}/>
					<SelectBox optionObj={MonthPart} {...register('shippingStartPart')}/>
					<span>から</span>
					<SelectBox optionObj={Month} {...register('shippingEnd')}/>
					<SelectBox optionObj={MonthPart} {...register('shippingEndPart')}/>
				</div>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'公開設定'} htmlFor={''}/>
				<div css={RadioGroup}>
					<Radio text={'公開'} value={1} {...register('status')} defaultChecked={true}/>
					<Radio text={'非公開'} value={0} {...register('status')}/>
				</div>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'サムネイル画像'} htmlFor={'thumbnail'}/>
				<FileField id={'thumbnail'} {...register('thumbnail')}/>
			</FormGroup>

			<p css={CautionStyle}>
				<span>※【その他に画像を登録する場合】<br/></span>
				一度このアイテムを登録後、アイテム詳細ページより追加してください。
			</p>
			<div css={ButtonBox}>
				<MainButton text={'登録'} color={'info'} type={'submit'} align={'center'} width={'half'}></MainButton>
			</div>


		</form>
	);
};

export default CreateForm;
