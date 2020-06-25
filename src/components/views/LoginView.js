import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const LoginView = (props) => {
    return (
        <div className="page1 p-5">
            <form className="center " onSubmit={props.handleSubmit}>
                <div className="form-group ">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" name="username" onChange={props.handleChange}required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" onChange={props.handleChange} required />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
        </div>
    );
};

export default LoginView;