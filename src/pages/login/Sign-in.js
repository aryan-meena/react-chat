import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <br />

      <div className="modal-dialog  mb-0 mt-0" role="document">
        <div className="modal-content border-0">
          <div className="modal-header   position-relative modal-shape-header p-0 ">
            <div className="position-relative z-index-1 light">
              <img
                alt="logo"
                src={require("../../assets/images/dc1.jpg")}
                style={{
                  width: "500px",
                  height: "180px",
                }}
              />
            </div>
          </div>
          <div className="modal-body py-4 px-5">
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  autoComplete="off"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="modal-auth-password">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  autoComplete="off"
                  id="modal-auth-password"
                />
              </div>

              <div className="mt-4 text-center">
                <Link to="/admin/dashboard">
                  <button
                    className="avatar-name btn-lg  bg-soft-success text-dark"
                    type="button"
                    style={{ width: "100%", border: "none" }}
                  >
                    SIGN IN
                  </button>
                </Link>
                <Link to="/user/sign-up">
                  <button
                    className="avatar-name btn-lg mt-1 bg-soft-warning text-dark"
                    type="button"
                    style={{ width: "100%", border: "none" }}
                  >
                    SIGN UP
                  </button>
                </Link>
              </div>
            </form>
            <div className="position-relative mt-4">
              <hr className="bg-300" />
              <div className="divider-content-center">or register with</div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-sm-6">
                <button
                  className="btn btn-outline-google-plus btn-sm d-block w-100"
                  type="button"
                >
                  <span
                    className="fab fa-google-plus-g me-2"
                    data-fa-transform="grow-8"
                  ></span>
                  google
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-outline-facebook btn-sm d-block w-100"
                  type="button"
                >
                  <span
                    className="fab fa-facebook-square me-2"
                    data-fa-transform="grow-8"
                  ></span>{" "}
                  facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
