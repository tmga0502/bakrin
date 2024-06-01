import React, {useState} from 'react';
import {useFieldArray, useForm} from "react-hook-form";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {FormGroup, FormLabel} from "@/ts/appMain/components/_ui/form/Form";
import {Category, Unit} from "@/ts/_constants/Item";
import {Plan} from "@/ts/_constants/Plan";
import {Month, MonthPart} from "@/ts/_constants/Date";
import Status from "@/ts/appMain/components/_ui/radioPanel/Status";
import {MdClose, MdOutlineCircle} from "react-icons/md";
import {ItemType} from "@/ts/types/ItemType";

const Form = (props: {data:ItemType}) => {
    const {register, watch, control, handleSubmit, formState:{errors}} = useForm({defaultValues:props.data})
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

    const onSubmit = handleSubmit((data)=> {
        console.log(data);
    })
console.log(props.data)
    return (
        <form onSubmit={onSubmit}>

            <FormGroup>
                <FormLabel label={'カテゴリー'} for={'category'}/>
                <select id={'category'} className="selectBoxStyle" defaultValue={props.data.category.name} {...register('category', {required: true})}>
                    {Category.map((category: string, index: number) => (
                        <option key={index}>{category}</option>
                    ))}
                </select>
            </FormGroup>

            <FormGroup>
                <FormLabel label={'アイテム名'} for={'name'} required={true}/>
                <input id={'name'} type={'text'} className={'inputStyle'} defaultValue={props.data.name} {...register('name', {required: true})}/>
                {errors.name && (
                    <p className="text-sm text-red-500">入力必須です</p>
                )}
            </FormGroup>

            <FormGroup>
                <div className="flex gap-2">
                    <div className="w-1/2">
                        <FormLabel label={'数量'} for={'count'} required={true}/>
                        <input id={'count'} type={'number'}
                               className={'inputStyle'} {...register('count', {required: true})}/>
                    </div>
                    <div className="w-1/2">
                        <FormLabel label={'単位'} for={'unit'}/>
                        <select id={'unit'} className="selectBoxStyle" defaultValue={props.data.unit.name} {...register('unit', {required: true})}>
                            {Unit.map((unit: string, index: number) => (
                                <option key={index}>{unit}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </FormGroup>

            <FormGroup>
                <div className="flex gap-2">
                    <div className="w-1/2">
                        <FormLabel label={'目安数量'} for={'guideCount'} required={true}/>
                        <input id={'guideCount'} type={'number'}
                               className={'inputStyle'} {...register('guideCount', {required: true})}/>
                    </div>
                    <div className="w-1/2">
                        <FormLabel label={'目安単位'} for={'guideUnit'}/>
                        <select id={'guideUnit'} className="selectBoxStyle" {...register('guideUnit', {required: true})}>
                            {Unit.map((item: string, index: number) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </FormGroup>

            <FormGroup>
                <FormLabel label={'プラン'} for={'plan'}/>
                <select id={'plan'} className="selectBoxStyle" {...register('plan', {required: true})}>
                    {Plan.map((item: any, index: number) => (
                        <option key={index}>{item.name}</option>
                    ))}
                </select>
            </FormGroup>

            <FormGroup>
                <FormLabel label={'商品説明'} for={'description'}/>
                <textarea id={'description'} className="textAreaStyle" rows={10}></textarea>
            </FormGroup>

            <FormGroup>
                <FormLabel label={'発送可能日'} for={''} />
                <div className="flex gap-2 items-center">
                    <select id={'shippingStart'}
                            className="selectBoxStyle" {...register('shippingStart', {required: true})}>
                        {Month.map((month: any, index: number) => (
                            <option key={index}>{month.name}</option>
                        ))}
                    </select>
                    <select id={'shippingStartPart'}
                            className="selectBoxStyle" {...register('shippingStartPart', {required: true})}>
                        {MonthPart.map((part: any, index: number) => (
                            <option key={index}>{part.name}</option>
                        ))}
                    </select>
                    <span className="whitespace-nowrap">から</span>

                    <select id={'shippingEnd'}
                            className="selectBoxStyle" {...register('shippingEnd', {required: true})}>
                        {Month.map((month: any, index: number) => (
                            <option key={index}>{month.name}</option>
                        ))}
                    </select>
                    <select id={'shippingEndPart'}
                            className="selectBoxStyle" {...register('shippingEndPart', {required: true})}>
                        {MonthPart.map((part: any, index: number) => (
                            <option key={index}>{part.name}</option>
                        ))}
                    </select>
                </div>
            </FormGroup>

            <FormGroup>
                <FormLabel label={'ステータス'} for={'status'} required={true}/>
                <div className="flex gap-6">
                    <input type="radio" id="statusPublic" className="hidden" value={0} defaultChecked={watch('status') === '0'} {...register('status')}/>
                    <Status icon={<MdOutlineCircle className="w-full text-3xl font-bold"/>} name={'公開'} color={'mainGreen'} for={'statusPublic'} checked={watch('status') === '0'}/>
                    <input type="radio" id="statusPrivate" className="hidden" value={1}  defaultChecked={watch('status') === '1'} {...register('status')}/>
                    <Status icon={<MdClose className="w-full text-3xl font-bold"/>} name={'非公開'} color={'danger'} for={'statusPrivate'} checked={watch('status') === '1'}/>
                </div>
            </FormGroup>

            {fields.map((field, index) => (
                <FormGroup key={field.id}>
                    <FormLabel label={'アイテム画像'} for={`img_paths.${index}.img_pathValue`}/>
                    <input type={'file'} className={'fileStyle'} {...register(`img_paths.${index}.img_pathValue`)} />
                </FormGroup>
            ))}
            <div className="flex gap-4 justify-end">
                <MainButton value={'画像を追加'} color={'info'} type={'button'} size={'sm'} onClick={() => [append({ img_pathValue: "" }), countUp()]}/>
                <MainButton value={'画像を削除'} color={'info'} type={'button'} size={'sm'} onClick={reduce}/>
            </div>

            <FormGroup>
                <div className="mt-12">
                    <MainButton value={'登録'} color={'info'} type={'submit'} size={'md'} width={'full'}/>
                </div>
            </FormGroup>
        </form>
    );
};

export default Form;
