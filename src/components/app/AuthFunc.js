import React, {Component} from "react";
import classes from './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../UI/Input/Input";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Profile from "./Profile";

export default class AuthFunc extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'text',
                label: 'Token',
                errorMessage: 'Invalid token',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    token: true,
                    minLength: 40
                }
            }
        }
    };

    loginHandler =event => {
       event.preventDefault();

    };

    submitHandler = event => {
        event.preventDefault();
    };

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (validation.token) {
            //isValid = validateToken(value) && isValid;
        }
        if (validation.minLength) {
            isValid = value.trim().length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value);

        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            formControls, isFormValid
        })
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.touched}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <Button type="success" onClick={this.loginHandler}
                        >Войти</Button>
                    </form>
                </div>
            </div>
        )
    }
}