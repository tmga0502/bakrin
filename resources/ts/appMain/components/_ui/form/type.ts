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

type InputType = {
    label: string,
    type: string,
    name: string,
    required?: boolean,
    message?: string,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    onChange?: any,
}

type RadioType = {
    id              : string,
    label           : string,
    name            : string,
    defaultChecked? : boolean,
    value?          : string | number,
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
    InputType,
    RadioType,
    TextareaType,
}
