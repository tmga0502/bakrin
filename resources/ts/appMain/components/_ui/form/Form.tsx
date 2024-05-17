import React from 'react';
import {FormGroupProps, FormLabelType, InputType, RadioType, TextareaType} from './type'
import Budge from "@/ts/appMain/components/_ui/budge/Budge";

const FormGroup = (props:FormGroupProps) => {
    return(
        <div className="mb-6">{props.children}</div>
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

const TextInput = (props: InputType) => {
    return (
        <div className="mb-4">
            <input
                type={props.type}
                name={props.name}
                className={`
                  !mt-0 py-1 px-2 block w-full border-2 rounded-md text-sm
                  focus:outline-none focus:ring-2 focus:ring-mainGreen focus:border-transparent
                  focus-visible:outline-0
                  disabled:opacity-50 disabled:pointer-events-none
                `}
               placeholder={props.placeholder}
            />
        </div>
    );
};

const RadioBox = (props: RadioType) => {
    return(
        <div className="flex items-center mb-4">
            <input id={props.id} type="radio" value="" name="default-radio" className="radioStyle radioAccent"/>
            <label htmlFor={props.id} className="ms-2 text-sm font-medium">{props.label}</label>
        </div>
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

export {
    FormGroup,
    FormLabel,
    TextInput,
    RadioBox,
    TextAreaBox,
};
