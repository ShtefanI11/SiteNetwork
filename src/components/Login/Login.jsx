import React from "react";
import css from './../Header/Header.module.css'
import { reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { CreateField } from "../common/FormsControls/FormsControls";
const maxLength33 = maxLengthCreator(33)
const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Email', 'email', [required, maxLength33], Input)}
            {CreateField('Password', 'password', [required, maxLength33], Input, { type: 'password' })}
            {CreateField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
            {error && <div className={css.formSummeryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1 className={css.text}>LoginUp</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)