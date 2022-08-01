import React from "react";

const Topnavbar = () => {
  return (
    <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
      <button
        className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarVerticalCollapse"
        aria-controls="navbarVerticalCollapse"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggle-icon">
          <span className="toggle-line"></span>
        </span>
      </button>
      <a className="navbar-brand me-1 me-sm-3" href="index.html">
        <div className="d-flex align-items-center">
          <img
            className="me-2"
            src={require("../assets/images/dc4.png")}
            width="40"
          />
          <span className="font-sans-serif">Aryan</span>
        </div>
      </a>
      <ul className="navbar-nav align-items-center d-none d-lg-block">
        <li className="nav-item"></li>
      </ul>
      <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
        <li className="nav-item">
          <div className="theme-control-toggle fa-icon-wait px-2">
            <input
              className="form-check-input ms-0 theme-control-toggle-input"
              id="themeControlToggle"
              type="checkbox"
              data-theme-control="theme"
              value="dark"
            />
            <label
              className="mb-0 theme-control-toggle-label theme-control-toggle-light"
              htmlFor="themeControlToggle"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Switch to light theme"
            >
              <span className="fas fa-sun fs-0"></span>
            </label>
            <label
              className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
              htmlFor="themeControlToggle"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Switch to dark theme"
            >
              <span className="fas fa-moon fs-0"></span>
            </label>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
            id="navbarDropdownNotification"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-hide-on-body-scroll="data-hide-on-body-scroll"
          >
            <span
              className="fas fa-bell"
              data-fa-transform="shrink-6"
              style={{ fontSize: "33px" }}
            ></span>
          </a>
          <div
            className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
            aria-labelledby="navbarDropdownNotification"
          >
            <div className="card card-notification shadow-none">
              <div className="card-header">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <h6 className="card-header-title mb-0">Notifications</h6>
                  </div>
                  <div className="col-auto ps-0 ps-sm-3">
                    <a className="card-link fw-normal" href="#">
                      Mark all as read
                    </a>
                  </div>
                </div>
              </div>
              <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }}>
                <div className="list-group list-group-flush fw-normal fs--1">
                  <div className="list-group-title border-bottom">NEW</div>
                  <div className="list-group-item">
                    <a
                      className="notification notification-flush notification-unread"
                      href="#!"
                    >
                      <div className="notification-avatar">
                        <div className="avatar avatar-2xl me-3">
                          <img
                            className="rounded-circle"
                            src={require("../assets/images/1-thumb.png")}
                          />
                        </div>
                      </div>
                      <div className="notification-body">
                        <p className="mb-1">
                          <strong>Emma Watson</strong> replied to your comment :
                          "Hello world 😍"
                        </p>
                        <span className="notification-time">
                          <span className="me-2" role="img" aria-label="Emoji">
                            💬
                          </span>
                          Just now
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="list-group-item">
                    <a
                      className="notification notification-flush notification-unread"
                      href="#!"
                    >
                      <div className="notification-avatar">
                        <div className="avatar avatar-2xl me-3">
                          <div className="avatar-name rounded-circle">
                            <span>AB</span>
                          </div>
                        </div>
                      </div>
                      <div className="notification-body">
                        <p className="mb-1">
                          <strong>Albert Brooks</strong> reacted to
                          <strong>Mia Khalifa's</strong> status
                        </p>
                        <span className="notification-time">
                          <span className="me-2 fab fa-gratipay text-danger"></span>
                          9hr
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="list-group-title border-bottom">EARLIER</div>
                  <div className="list-group-item">
                    <a className="notification notification-flush" href="#!">
                      <div className="notification-avatar">
                        <div className="avatar avatar-2xl me-3">
                          <img
                            className="rounded-circle"
                            src={require("../assets/images/weather-sm.jpg")}
                          />
                        </div>
                      </div>
                      <div className="notification-body">
                        <p className="mb-1">
                          The forecast today shows a low of 20℃ in California.
                          See today's weather.
                        </p>
                        <span className="notification-time">
                          <span className="me-2" role="img" aria-label="Emoji">
                            🌤️
                          </span>
                          1d
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="list-group-item">
                    <a
                      className="border-bottom-0 notification-unread  notification notification-flush"
                      href="#!"
                    >
                      <div className="notification-avatar">
                        <div className="avatar avatar-xl me-3">
                          <img
                            className="rounded-circle"
                            src={require("../assets/images/oxford.png")}
                          />
                        </div>
                      </div>
                      <div className="notification-body">
                        <p className="mb-1">
                          <strong>University of Oxford</strong> created an event
                          : "Causal Inference Hilary 2019"
                        </p>
                        <span className="notification-time">
                          <span className="me-2" role="img" aria-label="Emoji">
                            ✌️
                          </span>
                          1w
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="list-group-item">
                    <a
                      className="border-bottom-0 notification notification-flush"
                      href="#!"
                    >
                      <div className="notification-avatar">
                        <div className="avatar avatar-xl me-3">
                          <img
                            className="rounded-circle"
                            src={require("../assets/images/10.jpg")}
                          />
                        </div>
                      </div>
                      <div className="notification-body">
                        <p className="mb-1">
                          <strong>James Cameron</strong> invited to join the
                          group: United Nations International Children's Fund
                        </p>
                        <span className="notification-time">
                          <span className="me-2" role="img" aria-label="Emoji">
                            🙋‍
                          </span>
                          2d
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center border-top">
                <a
                  className="card-link d-block"
                  href="app/social/notifications.html"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown px-1">
          <a
            className="nav-link fa-icon-wait nine-dots p-1"
            id="navbarDropdownMenu"
            role="button"
            data-hide-on-body-scroll="data-hide-on-body-scroll"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="43"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#6C6E71" />
              <circle cx="2" cy="8" r="2" fill="#6C6E71" />
              <circle cx="2" cy="14" r="2" fill="#6C6E71" />
              <circle cx="8" cy="8" r="2" fill="#6C6E71" />
              <circle cx="8" cy="14" r="2" fill="#6C6E71" />
              <circle cx="14" cy="8" r="2" fill="#6C6E71" />
              <circle cx="14" cy="14" r="2" fill="#6C6E71" />
              <circle cx="8" cy="2" r="2" fill="#6C6E71" />
              <circle cx="14" cy="2" r="2" fill="#6C6E71" />
            </svg>
          </a>
          <div
            className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
            aria-labelledby="navbarDropdownMenu"
          >
            <div className="card shadow-none">
              <div className="scrollbar-overlay nine-dots-dropdown">
                <div className="card-body px-3">
                  <div className="row text-center gx-0 gy-0">
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="pages/user/profile.html"
                        target="_blank"
                      >
                        <div className="avatar avatar-2xl">
                          <img
                            className="rounded-circle"
                            src={require("../assets/images/3.jpg")}
                          />
                        </div>
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2">
                          Account
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="https://themewagon.com/"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/themewagon.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Themewagon
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="https://mailbluster.com/"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/mailbluster.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Mailbluster
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/google.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Google
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/spotify.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Spotify
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/steam.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Steam
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/github-light.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Github
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/discord.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Discord
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/xbox.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          xbox
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/trello.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Kanban
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/hp.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Hp
                        </p>
                      </a>
                    </div>
                    <div className="col-12">
                      <hr className="my-3 mx-n3 bg-200" />
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/linkedin.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Linkedin
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/twitter.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Twitter
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/facebook.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Facebook
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/instagram.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Instagram
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/pinterest.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Pinterest
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/slack.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Slack
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="#!"
                        target="_blank"
                      >
                        <img
                          className="rounded"
                          src={require("../assets/images/deviantart.png")}
                          width="40"
                          height="40"
                        />
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">
                          Deviantart
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                        href="app/events/event-detail.html"
                        target="_blank"
                      >
                        <div className="avatar avatar-2xl">
                          <div className="avatar-name rounded-circle bg-soft-primary text-primary">
                            <span className="fs-2">E</span>
                          </div>
                        </div>
                        <p className="mb-0 fw-medium text-800 text-truncate fs--2">
                          Events
                        </p>
                      </a>
                    </div>
                    <div className="col-12">
                      <a
                        className="btn btn-outline-primary btn-sm mt-4"
                        href="#!"
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link pe-0 ps-2"
            id="navbarDropdownUser"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="avatar avatar-xl">
              <img
                className="rounded-circle"
                src={require("../assets/images/3-thumb_1.png")}
              />
            </div>
          </a>
          <div
            className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
            aria-labelledby="navbarDropdownUser"
          >
            <div className="bg-white dark__bg-1000 rounded-2 py-2">
              <a className="dropdown-item fw-bold text-warning" href="#!">
                <span className="fas fa-crown me-1"></span>
                <span>Go Pro</span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#!">
                Set status
              </a>
              <a className="dropdown-item" href="pages/user/profile.html">
                Profile & account
              </a>
              <a className="dropdown-item" href="#!">
                Feedback
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="pages/user/settings.html">
                Settings
              </a>
              <a
                className="dropdown-item"
                href="pages/authentication/card/logout.html"
              >
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topnavbar;
