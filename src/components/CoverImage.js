import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "../components/Cards";

const CoverImage = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Card extraClass={`mb-3 btn-reveal-trigger`}>
          <CardHeader extraClass="position-relative min-vh-25 mb-8">
            <div className="cover-image">
              <div
                className="bg-holder rounded-3 rounded-bottom-0"
                style={{
                  backgroundImage:
                    "url(" + require("../assets/images/usergb.jpg") + ")",
                }}
              ></div>

              <input className="d-none" id="upload-cover-image" type="file" />
              <label
                className="cover-image-file-input"
                htmlFor="upload-cover-image"
              >
                <span className="fas fa-camera me-2"></span>
                <span>Change cover photo</span>
              </label>
            </div>
            <div className="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail rounded-circle">
              <div className="h-100 w-100 rounded-circle overflow-hidden position-relative">
                <img
                  src={require("../assets/images/user.jpg")}
                  width="200"
                  alt=""
                  data-dz-thumbnail="data-dz-thumbnail"
                />
                <input className="d-none" id="profile-image" type="file" />
                <label
                  className="mb-0 overlay-icon d-flex flex-center"
                  htmlFor="profile-image"
                >
                  <span className="bg-holder overlay overlay-0"></span>
                  <span className="z-index-1 text-white dark__text-white text-center fs--1">
                    <span className="fas fa-camera"></span>
                    <span className="d-block">Update</span>
                  </span>
                </label>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default CoverImage;
