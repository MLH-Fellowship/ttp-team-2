import React, { Component } from "react";
import { LoginView } from "../views";
import { connect } from "react-redux";
import { loginThunk } from "../../thunks";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    render() {
        return (
            <LoginView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                loggedIn={this.props.loggedIn}
            />
        );
    }
}

const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id,
    };
};

const mapDispatch = (dispatch, ownProps) => {
    return {
        login: (username, password) => dispatch(loginThunk(username, password, ownProps)),
    };
};

export default connect(mapState, mapDispatch)(LoginContainer);