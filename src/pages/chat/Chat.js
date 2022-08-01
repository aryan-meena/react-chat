import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "../../components/Cards";
import ChatBox from "./ChatBox";

const Chat = () => {
  return (
    <div className="card card-chat overflow-hidden">
      <div className="card-body d-flex p-0 h-100">
        <div className="chat-sidebar">
          <form
            className="contacts-search-wrapper"
            style={{
              height: "3.30rem",
              borderBottom: "1px solid var(--falcon-border-color)",
            }}
          >
            <div className="form-group mb-0 position-relative d-md-none d-lg-block w-100 h-100">
              <input
                className="form-control form-control-sm chat-contacts-search border-0 h-100"
                type="text"
                placeholder="Search contacts ..."
              />
              <svg
                className="svg-inline--fa fa-search fa-w-16 contacts-search-icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </div>
            <button className="btn btn-sm btn-transparent d-none d-md-inline-block d-lg-none">
              <svg
                className="svg-inline--fa fa-search fa-w-16 fs--1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </form>
          <div className="contacts-list scrollbar-overlay os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
            <div className="os-resize-observer-host observed">
              <div
                className="os-resize-observer"
                style={{ left: "0px", right: "auto" }}
              ></div>
            </div>
            <div
              className="os-size-auto-observer observed"
              style={{ height: "calc(100% + 1px)", float: "left" }}
            >
              <div className="os-resize-observer"></div>
            </div>
            <div
              className="os-content-glue"
              style={{ margin: "0px", width: "278px", height: "82px" }}
            ></div>
            <div className="os-padding">
              <div
                className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid"
                style={{ overflowY: "scroll" }}
              >
                <div
                  className="os-content"
                  style={{ padding: "0px", height: "100%", width: "100%" }}
                >
                  <div
                    className="nav nav-tabs border-0 flex-column"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <div
                      className="hover-actions-trigger chat-contact nav-item active"
                      role="tab"
                      id="chat-link-0"
                      data-bs-toggle="tab"
                      data-bs-target="#chat-0"
                      aria-controls="chat-0"
                      aria-selected="true"
                    >
                      <div className="d-md-none d-lg-block">
                        <div className="dropdown dropdown-active-trigger dropdown-chat">
                          <button
                            className="hover-actions btn btn-link btn-sm text-400 dropdown-caret-none dropdown-toggle end-0 fs-0 mt-4 me-1 z-index-1 pb-2 mb-n2"
                            type="button"
                            data-boundary="viewport"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              className="svg-inline--fa fa-cog fa-w-16"
                              data-fa-transform="shrink-3 down-4"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="cog"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                              style={{ transformOrigin: " 0.5em 0.75em" }}
                            >
                              <g transform="translate(256 256)">
                                <g transform="translate(0, 128)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                                  <path
                                    fill="currentColor"
                                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                                    transform="translate(-256 -256)"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end border py-2 rounded-2">
                            <a className="dropdown-item" href="#!">
                              Mute
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#!">
                              Archive
                            </a>
                            <a className="dropdown-item text-danger" href="#!">
                              Delete
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#!">
                              Mark as Unread
                            </a>
                            <a className="dropdown-item" href="#!">
                              Something's Wrong
                            </a>
                            <a className="dropdown-item" href="#!">
                              Ignore Messsages
                            </a>
                            <a className="dropdown-item" href="#!">
                              Block Messages
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="avatar avatar-xl status-online">
                          <img
                            className="rounded-circle"
                            src="../assets/img/team/2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-0 chat-contact-title">
                              Antony Hopkins
                            </h6>
                            <span className="message-time fs--2">Tue</span>
                          </div>
                          <div className="min-w-0">
                            <div className="chat-contact-content pe-3">
                              Antony sent 6 photos
                            </div>
                            <div className="position-absolute bottom-0 end-0 hover-hide"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track os-scrollbar-track-off">
                <div
                  className="os-scrollbar-handle"
                  style={{ width: "100%", transform: "translate(0px)" }}
                ></div>
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track os-scrollbar-track-off">
                <div
                  className="os-scrollbar-handle"
                  style={{ height: "11.2314%", transform: "translate(0px)" }}
                ></div>
              </div>
            </div>
            <div className="os-scrollbar-corner"></div>
          </div>
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
