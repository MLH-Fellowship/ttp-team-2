import React, { Component } from "react";
import { NavbarView } from "../views";
import { me } from "../../thunks";
import { connect } from "react-redux";

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <NavbarView isLoggedIn={this.props.isLoggedIn} />
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
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(NavbarContainer);
