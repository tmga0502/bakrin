import React, {useState} from 'react';
import {FormType} from "./Form.type";
import {Flex, MonthFlex, RadioGroup} from './Form.styles';
import {Month, MonthPart} from "@/react/_constants/Date";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {useGetUnits} from "@/react/api/query/UnitQuery";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import {useForm} from "react-hook-form";
import {FormGroup, FormLabel} from "@/react/app/mainApp/components/layout/form";
import Select from "@/react/app/mainApp/components/elements/form/Select/Select";
import Input from "@/react/app/mainApp/components/elements/form/Input/Input";
import Radio from "@/react/app/mainApp/components/elements/form/Radio/Radio";

const Form: React.FC<FormType> = () => {

	const {data: categoryData} = useGetCategories();
	const {data: unitData} = useGetUnits();
	const {data: planData} = useGetPlans();
	const {register, handleSubmit, control} = useForm({
		// defaultValues: {
		// 	// img_paths: [{img_pathValue: ""}]
		// }
	})

	// const {fields, append, remove} = useFieldArray({
	// 	control,
	// 	name: "img_paths"
	// });
	const [count, setCount] = useState(0);
	const countUp = () => setCount(count + 1);

	const reduce = () => {
		if (count > 0) {
			// remove(count);
			setCount(count - 1);
		}
	};

	const onSubmit = (data: any) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<FormLabel text={'カテゴリー'} htmlFor={'category'}/>
				<Select optionObj={categoryData} {...register('category')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'アイテム名'} htmlFor={'name'}/>
				<Input id={'name'} {...register('name')}/>
			</FormGroup>

			<div css={Flex}>
				<FormGroup>
					<FormLabel text={'数量'} htmlFor={'count'}/>
					<Input id={'count'} type={'number'} {...register('count')}/>
				</FormGroup>
				<FormGroup>
					<FormLabel text={'単位'} htmlFor={'unit'}/>
					<Select optionObj={unitData} {...register('unit')}/>
				</FormGroup>
			</div>

			<div css={Flex}>
				<FormGroup>
					<FormLabel text={'目安数量'} htmlFor={'guideCount'}/>
					<Input id={'guideCount'} type={'number'} {...register('guideCount')}/>
				</FormGroup>
				<FormGroup>
					<FormLabel text={'目安単位'} htmlFor={'guideUnit'}/>
					<Select optionObj={unitData} {...register('guideUnit')}/>
				</FormGroup>
			</div>

			<FormGroup>
				<FormLabel text={'プラン'} htmlFor={'plan'}/>
				<Select optionObj={planData} {...register('plan')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'発送可能日'} htmlFor={''}/>
				<div css={MonthFlex}>
					<Select optionObj={Month} {...register('shippingStart')}/>
					<Select optionObj={MonthPart} {...register('shippingStartPart')}/>
					<span>から</span>
					<Select optionObj={Month} {...register('shippingEnd')}/>
					<Select optionObj={MonthPart} {...register('shippingEndPart')}/>
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
				<Input type={'file'} id={'thumbnail'} {...register('thumbnail')} />
			</FormGroup>


		</form>
	);
};

export default Form;
