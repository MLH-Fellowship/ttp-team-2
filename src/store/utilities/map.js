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
export const getMarkersThunk = () => async (dispatch) => { // should I include  ownProps as one of the props and then pushing history?
    let markers;
    await axios
        .get("/allZip")
        .then((res) => res.data)
        .then((arr) => {
            markers = arr;
        })
        .catch((error) => console.log(error));
        
    try {
        dispatch(getMarkers(markers));
    } catch (error) {
        console.log(error);
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