import React from "react";
import styles from "./UserInfo.module.css";
import pic from "../../assets/profile.jpg";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="row mb-4 d-flex align-items gap">
      {/* Left column with user image and name */}
      <div
        className={`col-md-3 py-3 card mb-3 mb-md-0 ${styles.textCenter} d-flex flex-column justify-content-center`}
      >
        <img
          src={pic}
          alt="User Profile"
          className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
        />
        <h4>{userInfo.username}</h4>
        <p className="text-muted">{userInfo.email}</p>
        <button
          className="btn mt-2"
          style={{ backgroundColor: "#6050DC", color: "white" }}
        >
          Edit Profile
        </button>
      </div>

      {/* Right column with account info */}
      <div className="col-md-9">
        <div className="card">
          <div
            className="card-header"
            style={{ backgroundColor: "#6050DC", color: "white" }}
          >
            <h5>Account Overview</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {/* Left side of info */}
              <div className="col-md-6">
                <p>
                  <strong>Full Name:</strong> {userInfo.first_name}{" "}
                  {userInfo.last_name}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userInfo.phone}
                </p>
              </div>

              {/* Right side of info */}
              <div className="col-md-6">
                <p>
                  <strong>City:</strong> {userInfo.address}
                </p>
                <p>
                  <strong>Country:</strong> {userInfo.country}
                </p>
                <p>
                  <strong>Member Since:</strong> January 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
