import axios from "axios";

// ACTION TYPE
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// ACTION CREATOR
const signUp = (user) => {
    return {
        type: SIGN_UP,
        payload: user,
    };
};

const login = (user) => {
    return {
        type: LOGIN,
        payload: user,
    };
};

const logout = () => {
    return {
        type: LOGOUT,
    };
};

// THUNKS
export const signUpThunk = (username, password, zip, age, symptoms, tested, isPositive, ownProps) => async (dispatch) => {
    //Once server route for sign up is implemented, change the axios post route to appropriate server endpoint
    console.log(username, password, zip, age, symptoms, tested, isPositive);
    let results;
    try {
        results = axios.post(
            `/auth/signup`,
            { username, password, zip, age, symptoms, tested, isPositive },
            { withCredentials: true }
        );
    } catch (error) {
        return dispatch(signUp({ error: error }));
    }

    try {
        dispatch(signUp(results.data));
        ownProps.history.push("/login");
    } catch (error) {
        console.log(error);
    }
};

export const loginThunk = (username, password, ownProps) => async (dispatch) => {
    let results;
    try {
        results = await axios.post(
            `/auth/login`,
            { username, password },
            { withCredentials: true }
        );
    } catch (error) {
        ownProps.history.push("/login");
        return dispatch(login({ error: error }));
    }

    try {
        dispatch(login(results.data));
        ownProps.history.push("/");
    } catch (error) {
        console.log(error);
    }
};


export const logoutThunk = () => async (dispatch) => {
    try {
        await axios.delete(`/auth/logout`, { withCredentials: true });
        dispatch(logout());
    } catch (error) {
        console.error(error);
    }
};

export const me = () => async (dispatch) => {
    try {
        const res = await axios.get(`/auth/me`, { withCredentials: true });
        dispatch(login(res.data || {}));
    } catch (err) {
        console.error(err);
    }
};

// REDUCER
const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return {};
        default:
            return state;
    }
};

export default reducer;