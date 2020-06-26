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
            tested: false,
            isPositive: false,
            showTestResult: false,
            errors: {},
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }/*, this.validatePassword*/);
    };

    handleRadio = (event) => {
        this.setState({ showTestResult: true });
        this.setState({ tested: Boolean(event.target.value) });
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
        // Change to password validation function above later
        if (this.state.password === this.state.confirmPassword) {
            this.props.signUp(this.state.username, this.state.password, this.state.zip, this.state.age, this.state.symptoms, this.state.tested, this.state.isPositive);
        }
    };

    render() {
        return <SignUpView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleRadio={this.handleRadio}
            errors={this.state.errors}
            isValidPassword={this.state.isValidPassword}
            handleTestResult={this.handleTestResult}
            isPositive={this.state.isPositive}
            showTestResult={this.showTestResult}
        />;
    }
}

const mapState = (state) => {
    return {

    };
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        signUp: (username, password, zip, age, symptoms, tested, isPositive) => dispatch(signUpThunk(username, password, zip, age, symptoms, tested, isPositive, ownProps))
    }
}

export default connect(null, mapDispatch)(SignUpContainer);