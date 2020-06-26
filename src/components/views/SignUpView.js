import React from "react";

const SignUpView = (props) => {
  return (
    <form className="page1 p-5" onSubmit={props.handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            name="username"
            onChange={props.handleChange}
            required
          />
          <small id="usernameHelpInline" className="text-muted">
            Must be 3+ characters long.
          </small>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            name="password"
            onChange={props.handleChange}
            required
          />
          <small id="passwordHelpInline" className="text-muted">
            Must be 6+ characters long.
          </small>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword5">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword5"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={props.handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputZIP">ZIP Code</label>
        <input
          type="number"
          className="form-control"
          id="inputZIP"
          placeholder="10000"
          name="zip"
          onChange={props.handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAge">Age</label>
        <input
          type="number"
          className="form-control"
          id="inputAge"
          name="age"
          onChange={props.handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputSymptoms">Symptoms</label>
        <input
          type="text"
          className="form-control"
          id="inputSymptoms"
          placeholder="Fever, Cough, etc."
          name="symptoms"
          onChange={props.handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Have you been tested?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="tested"
            id="exampleRadios1"
            value="true"
            onClick={props.handleRadio}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="tested"
            id="exampleRadios2"
            value="false"
            onClick={props.handleRadio}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            No
          </label>
        </div>
      </div>
      <div className="form-group">
        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          If so, what were the test results?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isPositive"
            id="exampleRadios1"
            value="true"
            onClick={props.handleRadio}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Positive
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="isPositive"
            id="exampleRadios2"
            value="false"
            onClick={props.handleRadio}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Negative
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default SignUpView;
