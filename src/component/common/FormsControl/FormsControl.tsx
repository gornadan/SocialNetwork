import React, {InputHTMLAttributes} from 'react';
import styles from './FormsControl.module.css'
import {WrappedFieldProps} from "redux-form";




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