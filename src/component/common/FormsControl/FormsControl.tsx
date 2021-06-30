import React from 'react';
import styles from './FormsControl.module.css'
import {Field} from "redux-form";


//@ts-ignore
const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}



export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div><textarea {...input}{...props}/></div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
            <div><input {...input}{...props}/></div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const createField = (placeholder: any, name: any, validators: any, component: any, props: any = {}, text: any = '') => {
    return <div>
        <Field  placeholder={placeholder}
                name={name}
               validate={validators}
               component={component}
               {...props} /> {text}
    </div>
}