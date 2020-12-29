import React from "react";
import Email from "../../Commons/Email/Email";
import Password from "../../Commons/Password/Password";
import PhoneNumber from "../../Commons/PhoneNumber/PhoneNumber";

const SignIn = (props) => {
  return (
    <div>
      <div className="refund">
        <div className="row">
          <div className="col-md-12">
            <h1>Inicio de Sesion</h1>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header text-white bg-primary">
                    <h3 className="mb-0">Iniciar Sesion</h3>
                  </div>
                  <div className="card-body">
                    <form className="form" autoComplete="on">
                      <Email />
                      <Password />
                      <button className="btn btn-success btn-block">
                        Entrar
                      </button>
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

export default SignIn;
