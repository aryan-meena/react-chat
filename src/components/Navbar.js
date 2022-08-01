import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl navbar-inverted">
      <div className="d-flex align-items-center">
        <div className="toggle-icon-wrapper">
          <button
            className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Toggle Navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line"></span>
            </span>
          </button>
        </div>
        <a className="navbar-brand" href="index.html">
          <div className="d-flex align-items-center py-3">
            <img
              className="me-2"
              src={require("../assets/images/dc4.png")}
              width="40"
            />
            <span className="font-sans-serif">Aryan</span>
          </div>
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content scrollbar">
          <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link  ">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-chart-pie"></span>
                  </span>
                  <span className="nav-link-text ps-1">Dashboard</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">App</div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>
              <Link
                to=""
                className="nav-link"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-calendar-alt"></span>
                  </span>
                  <span className="nav-link-text ps-1">Calendar</span>
                </div>
              </Link>
              <Link
                to="/admin/chat"
                className="nav-link"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-comments"></span>
                  </span>
                  <span className="nav-link-text ps-1">Chat</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">
                  User Management
                </div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>

              <a
                className="nav-link dropdown-indicator"
                href="#user"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="user"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-user"></span>
                  </span>
                  <span className="nav-link-text ps-1">Users</span>
                </div>
              </a>
              <ul className="nav collapse" id="user">
                <li className="nav-item">
                  <Link
                    to="/admin/add-user"
                    className="nav-link"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">New User</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/manage-user"
                    className="nav-link"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Manage Users</span>
                    </div>
                  </Link>
                </li>
              </ul>
              <Link to="admin/setting" className="nav-link  ">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-cog"></span>
                  </span>
                  <span className="nav-link-text ps-1">Settings</span>
                </div>
              </Link>
            </li>
            {/* <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">Modules</div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>
              <a
                className="nav-link dropdown-indicator"
                href="#forms"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="forms"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-file-alt"></span>
                  </span>
                  <span className="nav-link-text ps-1">Forms</span>
                </div>
              </a>
              <ul className="nav collapse" id="forms">
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#basic"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="forms"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Basic</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="basic">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/basic/form-control.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Form control
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/basic/input-group.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Input group
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/basic/select.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Select</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/basic/checks.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Checks</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/basic/range.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Range</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/basic/layout.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Layout</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#advance"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="forms"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Advance</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="advance">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/advance/advance-select.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Advance select
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/advance/date-picker.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Date picker
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/advance/editor.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Editor</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/advance/emoji-button.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Emoji button
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/advance/file-uploader.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            File uploader
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/forms/advance/rating.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Rating</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/forms/floating-labels.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">
                        Floating labels
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/forms/wizard.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Wizard</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/forms/validation.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Validation</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#tables"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="tables"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-table"></span>
                  </span>
                  <span className="nav-link-text ps-1">Tables</span>
                </div>
              </a>
              <ul className="nav collapse" id="tables">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/tables/basic-tables.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Basic tables</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/tables/advance-tables.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Advance tables</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/tables/bulk-select.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Bulk select</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#charts"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="charts"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-chart-line"></span>
                  </span>
                  <span className="nav-link-text ps-1">Charts</span>
                </div>
              </a>
              <ul className="nav collapse" id="charts">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/charts/chartjs.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Chartjs</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#eCharts"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">ECharts</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="eCharts">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/line-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Line charts
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/bar-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Bar charts</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/candlestick-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Candlestick charts
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/geo-map.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Geo map</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/scatter-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Scatter charts
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/pie-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Pie charts</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/radar-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Radar charts
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/heatmap-charts.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Heatmap charts
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/charts/echarts/how-to-use.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">How to use</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#icons"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="icons"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-shapes"></span>
                  </span>
                  <span className="nav-link-text ps-1">Icons</span>
                </div>
              </a>
              <ul className="nav collapse" id="icons">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/icons/font-awesome.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Font awesome</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/icons/bootstrap-icons.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">
                        Bootstrap icons
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/icons/feather.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Feather</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/icons/material-icons.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Material icons</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#maps"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="maps"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-map"></span>
                  </span>
                  <span className="nav-link-text ps-1">Maps</span>
                </div>
              </a>
              <ul className="nav collapse" id="maps">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/maps/google-map.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Google map</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/maps/leaflet-map.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Leaflet map</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#components"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="components"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-puzzle-piece"></span>
                  </span>
                  <span className="nav-link-text ps-1">Components</span>
                </div>
              </a>
              <ul className="nav collapse" id="components">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/accordion.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Accordion</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/alerts.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Alerts</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/anchor.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Anchor</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/animated-icons.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Animated icons</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/background.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Background</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/badges.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Badges</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/breadcrumbs.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Breadcrumbs</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/buttons.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Buttons</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/calendar.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Calendar</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/cards.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Cards</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#carousel"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="components"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Carousel</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="carousel">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/carousel/bootstrap.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Bootstrap</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/carousel/swiper.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Swiper</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/collapse.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Collapse</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/cookie-notice.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Cookie notice</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/countup.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Countup</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/draggable.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Draggable</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/dropdowns.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Dropdowns</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/list-group.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">List group</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/modals.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Modals</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#navs-_and_-Tabs"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="components"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Navs & Tabs</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="navs-_and_-Tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/navs-and-tabs/navs.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Navs</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/navs-and-tabs/navbar.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Navbar</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/navs-and-tabs/vertical-navbar.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Vertical navbar
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/navs-and-tabs/top-navbar.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Top navbar</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/navs-and-tabs/combo-navbar.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">
                            Combo navbar
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/navs-and-tabs/tabs.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Tabs</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/offcanvas.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Offcanvas</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#pictures"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="components"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Pictures</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="pictures">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/pictures/avatar.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Avatar</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/pictures/images.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Images</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/pictures/figures.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Figures</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/pictures/hoverbox.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Hoverbox</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/pictures/lightbox.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Lightbox</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/progress-bar.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Progress bar</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/placeholder.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Placeholder</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/pagination.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Pagination</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/popovers.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Popovers</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/scrollspy.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Scrollspy</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/search.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Search</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/spinners.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Spinners</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/timeline.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Timeline</span>
                      <span className="badge rounded-pill ms-2 badge-soft-success">
                        New
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/toasts.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Toasts</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/tooltips.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Tooltips</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/treeview.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Treeview</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/components/typed-text.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Typed text</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#videos"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="components"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Videos</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="videos">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/videos/embed.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Embed</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="modules/components/videos/plyr.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Plyr</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a
                className="nav-link dropdown-indicator"
                href="#utilities"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="utilities"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-fire"></span>
                  </span>
                  <span className="nav-link-text ps-1">Utilities</span>
                </div>
              </a>
              <ul className="nav collapse" id="utilities">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/borders.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Borders</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/clearfix.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Clearfix</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/colors.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Colors</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/colored-links.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Colored links</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/display.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Display</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/flex.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Flex</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/float.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Float</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/grid.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Grid</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/overlayscrollbars.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">
                        Overlayscrollbars
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/position.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Position</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/spacing.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Spacing</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/sizing.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Sizing</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/stretched-link.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Stretched link</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/text-truncation.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">
                        Text truncation
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/typography.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Typography</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/vertical-align.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Vertical align</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="modules/utilities/visibility.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Visibility</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link"
                href="widgets.html"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-poll"></span>
                  </span>
                  <span className="nav-link-text ps-1">Widgets</span>
                </div>
              </a>
              <a
                className="nav-link dropdown-indicator"
                href="#multi-level"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="multi-level"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-layer-group"></span>
                  </span>
                  <span className="nav-link-text ps-1">Multi level</span>
                </div>
              </a>
              <ul className="nav collapse" id="multi-level">
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#level-two"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="multi-level"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Level two</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="level-two">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#!.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Item 1</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#!.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Item 2</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#level-three"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="multi-level"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Level three</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="level-three">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#!.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Item 3</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#item-4"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="level-three"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Item 4</span>
                        </div>
                      </a>
                      <ul className="nav collapse" id="item-4">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#!.html"
                            data-bs-toggle
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 5</span>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#!.html"
                            data-bs-toggle
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 6</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-indicator"
                    href="#level-four"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="multi-level"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Level four</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="level-four">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#!.html"
                        data-bs-toggle
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Item 6</span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-indicator"
                        href="#item-7"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="level-four"
                      >
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text ps-1">Item 7</span>
                        </div>
                      </a>
                      <ul className="nav collapse" id="item-7">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#!.html"
                            data-bs-toggle
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 8</span>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link dropdown-indicator"
                            href="#item-9"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls="item-7"
                          >
                            <div className="d-flex align-items-center">
                              <span className="nav-link-text ps-1">Item 9</span>
                            </div>
                          </a>
                          <ul className="nav collapse" id="item-9">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#!.html"
                                data-bs-toggle
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text ps-1">
                                    Item 10
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#!.html"
                                data-bs-toggle
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text ps-1">
                                    Item 11
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/*  <li className="nav-item">
              <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                <div className="col-auto navbar-vertical-label">
                  Documentation
                </div>
                <div className="col ps-0">
                  <hr className="mb-0 navbar-vertical-divider" />
                </div>
              </div>
              <a
                className="nav-link"
                href="documentation/getting-started.html"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-rocket"></span>
                  </span>
                  <span className="nav-link-text ps-1">Getting started</span>
                </div>
              </a>
              <a
                className="nav-link dropdown-indicator"
                href="#customization"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="customization"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-wrench"></span>
                  </span>
                  <span className="nav-link-text ps-1">Customization</span>
                </div>
              </a>
              <ul className="nav collapse" id="customization">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="documentation/customization/configuration.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Configuration</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="documentation/customization/styling.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Styling</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="documentation/customization/dark-mode.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Dark mode</span>
                      <span className="badge rounded-pill ms-2 badge-soft-success">
                        New
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="documentation/customization/plugin.html"
                    data-bs-toggle
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Plugin</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                className="nav-link"
                href="documentation/faq.html"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-question-circle"></span>
                  </span>
                  <span className="nav-link-text ps-1">Faq</span>
                </div>
              </a>
              <a
                className="nav-link"
                href="documentation/gulp.html"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fab fa-gulp"></span>
                  </span>
                  <span className="nav-link-text ps-1">Gulp</span>
                </div>
              </a>
              <a
                className="nav-link"
                href="documentation/design-file.html"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-palette"></span>
                  </span>
                  <span className="nav-link-text ps-1">Design file</span>
                </div>
              </a>
              <a
                className="nav-link"
                href="changelog.html"
                role="button"
                data-bs-toggle
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <span className="fas fa-code-branch"></span>
                  </span>
                  <span className="nav-link-text ps-1">Changelog</span>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
