import React, { Component } from "react";
import { ProfileView } from "../views";
import { connect } from "react-redux";
import { me } from "../../thunks";

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <ProfileView userInfo={this.props.user} isLoggedIn={this.props.isLoggedIn}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
      //userInfo should be an object with all the user info
    userInfo: () => dispatch(me()),
  };
};

export default connect(mapState, mapDispatch)(ProfileContainer);
