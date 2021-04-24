import { FieldProps } from 'formik'
import { TextField } from '@material-ui/core';
import * as React from 'react'
import { TextFieldProps } from 'material-ui';

interface Props extends FieldProps, TextFieldProps{
    placeholder:string;
    label: string;
}

export const CountDownField: React.FC<Props> = ({label, placeholder,field}) => {

return (
    <TextField
    {...field}
    label={label}
    placeholder={placeholder} 
   />  
);

}