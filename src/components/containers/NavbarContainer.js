import React, { Component } from "react";
import { NavbarView } from "../views";
import { me, logoutThunk } from "../../thunks";
import { connect } from "react-redux";

class NavbarContainer extends Component {
  handleLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <NavbarView isLoggedIn={this.props.isLoggedIn} handleLogout={this.handleLogout} />
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapPropsToDispatch = (dispatch) => {
  return {
    me: () => dispatch(me()),
    logout: () => dispatch(logoutThunk()),
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(NavbarContainer);
