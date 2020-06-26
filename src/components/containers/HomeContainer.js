import React, { Component } from "react";
import { HomeView } from "../views";
import { connect } from "react-redux";
import { getMarkersThunk } from "../../thunks";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.loadMarkers();
  }

  render() {
    return (
      <>
        <HomeView markers={this.props.markers} />
      </>
    );
  }
}

const mapState = (state) => {
  return {
    markers: state.map,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadMarkers: () => dispatch(getMarkersThunk()),
  };
};

export default connect(mapState, mapDispatch)(HomeContainer);
