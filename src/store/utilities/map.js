import axios from "axios";

// ACTION TYPE
const GET_MARKERS = "GET_MARKERS";

// ACTIONS
const getMarkers = (markers) => {
    return {
        type: GET_MARKERS,
        payload: markers,
    }
}

// THUNK
// gets the list of object zipcodes from /allZip
export const getMarkersThunk = (ownProps) => async (dispatch) => { // should I include  ownProps as one of the props and then pushing history?
    let markers;
    try {
        axios.get("/allZip")
            .then((data) => {
                console.log(data)
                dispatch(getMarkers(data))
                ownProps.history.push("/")
            })

    } catch (error) {
        console.log(error)
        return dispatch(getMarkers(error))
    }
};


// REDUCER
const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_MARKERS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;