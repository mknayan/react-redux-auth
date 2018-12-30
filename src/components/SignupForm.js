import React, { Component } from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';
import PropTypes from "prop-types";

class SignupForm extends Component {
    constructor (props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() { 
        const options = map(timezones, (val, key) =>
                <option key={val} value={val}>{key}</option>
            );
        return (
            <div className="row">
            <form onSubmit={this.onSubmit} className="col-sm-6 col-sm-offset-3">
                <h1>Join our community!</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                </div>
                
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="text" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input type="text" name="passwordConfirmation" className="form-control" value={this.state.passwordConfirmation} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label className="control-label"> Timezone</label>
                    <select className="form-control" name="timezone" onChange={this.onChange} value={this.state.timezone}>
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign Up
                    </button>
                </div>
            </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest:PropTypes.func.isRequired
}
 
export default SignupForm;