import React from 'react';
import { Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators";


type LoginFormPropsType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm = (props: InjectedFormProps<LoginFormPropsType>) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"}
                        name={"login"}
                        component={Input}
            validate={[required]}/>
            </div>
            <div><Field placeholder={"Password"} name={"password"}
                        validate={[required]}
                        component={Input}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me</div>
            <div><button>Login</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm< LoginFormPropsType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (login: string, password: string,  rememberMe: boolean ) => void
}

const Login = (props: any) => {
    const onSubmitLogin = (formData: LoginFormPropsType) => {

    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitLogin}/>
    </div>
};
export default Login;