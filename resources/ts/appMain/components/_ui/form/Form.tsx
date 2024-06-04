import React from 'react';
import {FileFieldProps, FormGroupProps, FormLabelType, InputFieldProps, RadioType, SelectFieldProps, TextareaFieldProps, TextareaType} from './type'
import Budge from "@/ts/appMain/components/_ui/budge/Budge";
import {useFormContext} from "react-hook-form";
import Status from "@/ts/appMain/components/_ui/radioPanel/Status";
import {MdClose, MdOutlineCircle} from "react-icons/md";

const FormGroup = (props:FormGroupProps) => {
    return(
        <div className="mb-6 flex-1">{props.children}</div>
    )
}

const FormLabel = (props: FormLabelType) => {
    return (
        <label className="block text-left text-sm font-bold mb-2" htmlFor={props.for}>
            {props.required ? (<Budge value={'必須'} color={'danger'}/>) : null}
            {props.label}
            {props.message ? (
                <span className="ml-4 text-red-500 text-xs">{props.message}</span>
            ) : null}
        </label>
    )
}

const InputField: React.FC<InputFieldProps> = ({label, id, type, defaultValue, required, disabled, onChange}) => {
    const {register, formState: {errors}} = useFormContext();
    return (
        <FormGroup>
            <FormLabel label={label} for={id} required={required}/>
            <input type={type} className="inputStyle" id={id} defaultValue={defaultValue} {...register(id, {required: required ? '入力必須です' : false})} disabled={disabled} onChange={onChange}/>
            {errors[id] && (
                <p className="text-danger text-xs">入力必須です</p>
            )}
        </FormGroup>
    )
}

const FileField: React.FC<FileFieldProps> = ({label, id, helper}) => {
    const {register} = useFormContext();
    return (
        <FormGroup>
            <FormLabel label={label} for={id}/>
            <input type={'file'} className="fileStyle" id={id} {...register(id)}/>
            {helper && (
                <p className={'text-xs pt-2'}>{helper}</p>
            )}
        </FormGroup>
    )
}

const SelectField: React.FC<SelectFieldProps> = ({label, id, optionObj, defaultValue}) => {
    const {register} = useFormContext();
    return (
        <FormGroup>
            <FormLabel label={label} for={id}/>
            <select className="selectBoxStyle" id={id} defaultValue={defaultValue} {...register(id)}>
                {optionObj.map((option: { id: string | number, name: string }, index: number) => (
                    <option value={option.id} key={index}>{option.name}</option>
                ))}
            </select>
        </FormGroup>
    )
}

const RadioBox = (props: RadioType) => {
    return(
        <div className="flex items-center mb-4">
            <input id={props.id} type="radio" value={props.value} name="default-radio" className="radioStyle radioAccent" defaultChecked={props.defaultChecked}/>
            <label htmlFor={props.id} className="ms-2 text-sm font-medium">{props.label}</label>
        </div>
    )
}

const TextAreaField: React.FC<TextareaFieldProps> = ({label, id, rows, defaultValue, required, disabled, onChange}) => {
    const {register, formState: {errors}} = useFormContext();
    return (
        <FormGroup>
            <FormLabel label={label} for={id} required={required}/>
            <textarea className="inputStyle" id={id} rows={rows} {...register(id, {required: required ? '入力必須です' : false})} disabled={disabled} onChange={onChange} defaultValue={defaultValue}></textarea>
            {errors[id] && (
                <p className="text-danger text-xs">入力必須です</p>
            )}
        </FormGroup>
    )
}

const TextAreaBox = (props: TextareaType) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor={props.id}>
                {props.label}
            </label>
            <textarea
                name={props.name}
                rows={props.rows}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-mainGreen focus:border-mainGreen focus-visible:outline-0">
                {props.placeholder}
            </textarea>
        </div>
    )
}

const StatusBox: React.FC<any> = ({defaultChecked}) => {
    const {register, watch} = useFormContext();
    return(
        <FormGroup>
            <FormLabel label={'ステータス'} for={'status'} required={true}/>
            <div className="flex gap-6">
                <input type="radio" id="statusPublic" className="hidden" value={0} defaultChecked={defaultChecked === 0} {...register('status')}/>
                <Status icon={<MdOutlineCircle className="w-full text-3xl font-bold"/>} name={'公開'} color={'mainGreen'} for={'statusPublic'} checked={watch('status') === 0}/>
                <input type="radio" id="statusPrivate" className="hidden" value={1}  defaultChecked={defaultChecked === 1} {...register('status')}/>
                <Status icon={<MdClose className="w-full text-3xl font-bold"/>} name={'非公開'} color={'danger'} for={'statusPrivate'} checked={watch('status') === 1}/>
            </div>
        </FormGroup>
    )
}

export {
    FormGroup,
    FormLabel,
    InputField,
    FileField,
    SelectField,
    RadioBox,
    TextAreaField,
    TextAreaBox,
    StatusBox,
};
