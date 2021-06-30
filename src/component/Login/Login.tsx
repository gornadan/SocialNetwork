import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators";
import {connect, useDispatch, useSelector} from 'react-redux';
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../redux/reduxStore";
import s from "../common/FormsControl/FormsControl.module.css"

type LoginFormPropsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm = (props: any) => {
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
            {props.captchaUrl && <img alt={"img"} src={props.captchaUrl}/>}
            {props.captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

                {props.error && <div className={s.formSummaryError}>{props.error}</div>}
                <div>  <button>Login</button>  </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<LoginFormPropsType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm);

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormOwnProps = {
    captchaUrl: string | null
}

const Login = () => {
    const dispatch = useDispatch();
    const captchaUrl =  useSelector<AppStateType, any>(state => state.auth.captchaUrl)
    const onSubmitLogin = (formData: LoginFormPropsType) => {
       dispatch (login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    };

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>

        <LoginReduxForm onSubmit={onSubmitLogin} captchaUrl={captchaUrl}/>
    </div>
};


export default connect(null, {login})(Login);