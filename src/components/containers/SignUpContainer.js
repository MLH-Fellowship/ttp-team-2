import React, { Component } from "react";
import SignUpView from "../views/SignUpView";
import { connect } from "react-redux";
import { signUpThunk } from "../../thunks";

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            isValidPassword: false,
            zip: 0,
            age: 0,
            symptoms: "",
            isPositive: false,
            showTestResult: false,
            errors: {},
        };
        this.handleResults = this.handleResults.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }/*, this.validatePassword*/);
    };

    handleResults = (event) => {
        console.log("This is the result radio", event.target.value)
        this.setState({ isPositive: Boolean(event.target.value) })
    }


    validatePassword = () => {
        const { password } = this.state;
        const { confirmPassword } = this.state;
        let errors = { ...this.state.errors };

        let isValidPassword = true;

        if (password !== confirmPassword) {
            isValidPassword = false;
            errors.name = "Passwords do no match.";
        }

        if (password.length < 6 || confirmPassword.length < 6) {
            isValidPassword = false;
            errors.name = "Password must be at least 6 characters.";
        }

        if (isValidPassword) {
            errors.name = "Valid password";
        }
        this.setState({ isValidPassword, errors });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit", this.state.isPositive)

        // Change to password validation function above later
        if (this.state.password === this.state.confirmPassword) {
            this.props.signUp(this.state.username, this.state.password, this.state.zip, this.state.age, this.state.symptoms, this.state.isPositive);
        }
    };

    render() {
        return <SignUpView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleRadio={this.handleRadio}
            errors={this.state.errors}
            isValidPassword={this.state.isValidPassword}
            handleResults={this.handleResults}
            showTestResult={this.state.showTestResult}

        />;
    }
}

const mapState = (state) => {
    return {

    };
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        signUp: (username, password, zip, age, symptoms, isPositive) => dispatch(signUpThunk(username, password, zip, age, symptoms, isPositive, ownProps))
    }
}

export default connect(null, mapDispatch)(SignUpContainer);