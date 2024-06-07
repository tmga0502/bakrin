import {ReactNode} from "react";

type FormGroupProps = {
    children: ReactNode,
}

type FormLabelType = {
    label: string,
    for: string,
    required?: boolean,
    message?: string,
}

type InputFieldProps = {
    label: string;
    id: string;
    type: string;
    defaultValue?: string;
    required?: boolean;
    unit?: string | ReactNode;
    disabled?: boolean;
    onChange?: any,
}

type FileFieldProps = {
    label   : string,
    id      : string,
    helper? : string,
}

type SelectFieldProps = {
    label: string;
    id: string;
    optionObj: any,
    defaultValue: string | number;
    required?: boolean;
}

type RadioType = {
    id              : string | number,
    label           : string,
    name            : string,
    defaultChecked? : boolean,
    value?          : string | number,
}

type TextareaFieldProps = {
    label: string;
    id: string;
    rows? : number,
    defaultValue?: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: any,
}

type TextareaType = {
    label: string,
    id: string,
    name: string,
    rows: number
    placeholder?: string
}

export{
    FormGroupProps,
    FormLabelType,
    InputFieldProps,
    FileFieldProps,
    SelectFieldProps,
    RadioType,
    TextareaFieldProps,
    TextareaType,
}
