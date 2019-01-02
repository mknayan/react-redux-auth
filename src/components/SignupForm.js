import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';
import PropTypes from "prop-types";
import classnames from 'classnames';

import validateInput from '../validations/signup';
import TextFieldGroup from './common/TextFieldGroup';

import history from '../history';

class SignupForm extends Component {
    constructor (props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isValid:false,
            isLoading:false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const val_return = validateInput(this.state);
        this.setState(val_return);
        //server side validation
        if(val_return.isValid){
            this.props.addFlashMessage({
                type:'success',
                text:'You Signed up Successfully, Welcome!'
            })
            history.push('/');
            // this.setState({errors: {}, isLoading: true});
            // this.props.userSignupRequest(this.state).then(
            //     () => {
            //         this.props.addFlashMessage({
            //             type:'success',
            //             text:'You Signed up Successfully, Welcome'
            //         })
            //         history.push('/');
            //     },
            //     ({data}) => this.setState({errors:data,isLoading:false})
            // );
        }
    }

    render() { 
        const { errors } = this.state;
        const options = map(timezones, (val, key) =>
                <option key={val} value={val}>{key}</option>
            );
        return (
            <div className="row">
            <form onSubmit={this.onSubmit} >
                <h1>Join our community!</h1>

                <TextFieldGroup
                error={errors.username}
                label="Username"
                onChange={this.onChange}
                checkUserExists={this.checkUserExists}
                value={this.state.username}
                field="username"
                />

                <TextFieldGroup
                error={errors.email}
                label="Email"
                onChange={this.onChange}
                checkUserExists={this.checkUserExists}
                value={this.state.email}
                field="email"
                />

                <TextFieldGroup
                error={errors.password}
                label="Password"
                onChange={this.onChange}
                value={this.state.password}
                field="password"
                type="password"
                />

                <TextFieldGroup
                error={errors.passwordConfirmation}
                label="Password Confirmation"
                onChange={this.onChange}
                value={this.state.passwordConfirmation}
                field="passwordConfirmation"
                type="password"
                />

                <div className={classnames("form-group", { 'has-error': errors.timezone })}>
                    <label className="control-label"> Timezone</label>
                    <select className="form-control" name="timezone" onChange={this.onChange} value={this.state.timezone}>
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign Up
                    </button>
                </div>
            </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest:PropTypes.func.isRequired,
    addFlashMessage:PropTypes.func.isRequired
}

// SignupForm.ThemeContext = {
//     router: PropTypes.object.isRequired
// }
 
export default SignupForm;