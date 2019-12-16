import React, {Component} from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {Router, Route} from 'react-router';
import history from "../../../history";
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

    checkStatus(response) {
        let json = response.json(); // http://stackoverflow.com/a/29475662/1916578

        if (response.status >= 200 && response.status < 300) {
            alert("Good");
            history.push("/profile");
            return json
        } else {
            alert("Bad");
            return json.then(window.Promise.reject.bind(window.Promise))
        }
    }

    submitHandler = event => {
        event.preventDefault();
        const token = this.state.formControls.email.value;

            const response = fetch('https://api.github.com/user', {
                headers: {
                    authorization: `Bearer ${
                        token
                    }`
                }
            }).then(this.checkStatus);
            // if (response.value>=200 &&response.value<300) {
            //    alert("Good");
            //     // this.props.history.push({
            //     //     pathname: '/profile'
            //     // })
            // } else {
            //     alert("Невалидный токен");
            //     // this.props.history.push({
            //     //     pathname: '/auth'
            //     // })
            // }
};

validateControl(value, validation)
{
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

    return true;
}

onChangeHandler = (event, controlName) => {
    console.log(`${controlName}
    : `, event.target.value);

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

renderInputs()
{
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

render()
{
    return (
        <div>
            <div>
                <h1>Authorization</h1>
                <form onSubmit={this.submitHandler}>
                    {this.renderInputs()}
                    <Button type="submit"
                    >Войти</Button>
                </form>
            </div>
        </div>
    )
}
}