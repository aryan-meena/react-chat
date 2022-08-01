import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <br />
      <div className="modal-dialog mt-1" role="document">
        <div className="modal-content border-0">
          <div className="modal-header px-5 position-relative modal-shape-header bg-light">
            <div className="position-relative z-index-1 light">
              <h4 className="mb-0 text-warning" id="authentication-modal-label">
                REGISTER
              </h4>
              <p className="fs--1 mb-0 text-white">
                Please create your free DC account
              </p>
            </div>
          </div>
          <div className="modal-body py-4 px-5">
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="modal-auth-name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="on"
                  id="modal-auth-name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="modal-auth-email">
                  Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  autoComplete="on"
                  id="modal-auth-email"
                />
              </div>
              <div className="row gx-2">
                <div className="mb-3 col-sm-6">
                  <label className="form-label" htmlFor="modal-auth-password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    autoComplete="on"
                    id="modal-auth-password"
                  />
                </div>
                <div className="mb-3 col-sm-6">
                  <label
                    className="form-label"
                    htmlFor="modal-auth-confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    autoComplete="on"
                    id="modal-auth-confirm-password"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link to="/admin/dashboard">
                  <button
                    className="avatar-name btn-lg  bg-soft-success text-dark"
                    type="button"
                    style={{ width: "100%", border: "none" }}
                  >
                    SIGN UP
                  </button>
                </Link>
              </div>
            </form>
            <div className="position-relative mt-5">
              <hr className="bg-300" />
              <div className="divider-content-center">or register with</div>
            </div>
            <div className="row g-2 mt-2">
              <div className="col-sm-6">
                <a
                  className="btn btn-outline-google-plus btn-sm d-block w-100"
                  href="#"
                >
                  <span
                    className="fab fa-google-plus-g me-2"
                    data-fa-transform="grow-8"
                  ></span>{" "}
                  google
                </a>
              </div>
              <div className="col-sm-6">
                <a
                  className="btn btn-outline-facebook btn-sm d-block w-100"
                  href="#"
                >
                  <span
                    className="fab fa-facebook-square me-2"
                    data-fa-transform="grow-8"
                  ></span>{" "}
                  facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
