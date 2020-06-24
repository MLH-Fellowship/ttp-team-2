import axios from "axios";

// ACTION TYPE
const SIGN_UP = "SIGN_UP";

// ACTION CREATOR
const signUp = (user) => {
    return {
        type: SIGN_UP,
        payload: user,
    };
};

// THUNKS
export const signUpThunk = (username, password, address, age, symptoms, tested, ownProps) => async (dispatch) => {
    //Once server route for sign up is implemented, change the axios post route to appropriate server endpoint
    console.log(username, password, address, age, symptoms, tested);
    let results;
    try {
        results = axios.post(
            `/api/signup`,
            { username, password, address, age, symptoms, tested },
            { withCredentials: true }
        );
    } catch (error) {
        return dispatch(signUp({ error: error }));
    }

    try {
        dispatch(signUp(results.data));
        ownProps.history.push("/");
    } catch (error) {
        console.log(error);
    }
};

// REDUCER
const reducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;