import React from 'react';
import { Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators";
import {connect, useSelector} from 'react-redux';
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../redux/reduxStore";
import s from "../common/FormsControl/FormsControl.module.css"


type LoginFormPropsType = {
    email: string
    password: string
    rememberMe: boolean

}


const LoginForm = (props: InjectedFormProps<LoginFormPropsType>) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"}
                        name={"email"}
                        component={Input}
            validate={[required]}/>
            </div>
            <div><Field placeholder={"Password"} name={"password"} type={"password"}
                        validate={[required]}
                        component={Input}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me</div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm< LoginFormPropsType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string,  rememberMe: boolean ) => void
}

const Login = (props: LoginPropsType ) => {
    const onSubmitLogin = (formData: LoginFormPropsType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if(isAuth) {
        return<Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitLogin}/>
    </div>
};


export default connect(null, {login})(Login);