import React from "react";
import Email from "../../Commons/Email/Email";
import FirstName from "../../Commons/FirstName/FirstName";
import LastName from "../../Commons/LastName/LastName";
import Password from '../../Commons/Password/Password'

const SignUp = (props) => {
  return (
    <div>
      <div className="SignUp">
        <div className="row">
          <div className="col-md-12">
            <h1>Register</h1>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header text-white bg-primary">
                    <h3 className="mb-0">Pagos 11.11</h3>
                  </div>
                  <div className="card-body">
                    <form className="form" autoComplete="on">
                        <FirstName />
                        <LastName />
                        <Email />
                        <Password />
                        <button className="btn btn-success btn-block">Create Account</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;