import React, { Component } from "react";
import { HomeView } from "../views";
import { connect } from "react-redux";

class HomeContainer extends Component {
    render() {
        return (
            <>
                <HomeView/>
            </>
        );
    }
}

export default HomeContainer;