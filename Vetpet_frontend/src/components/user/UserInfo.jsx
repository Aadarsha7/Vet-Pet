import React from "react";
import styles from "./UserInfo.module.css";
// import pic from "./profile.jpg";

const UserInfo = () => {
  return (
    <div className="row mb-4 d-flex align-items">
      {/* Left column with user image and name */}
      <div
        className={`col-md-3 py-3 card ${styles.textCenter} d-flex flex-column justify-content-center`}
      >
        <img
          // src={pic}
          src="null"
          alt="User Profile"
          className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
        />
        <h4>John Doe</h4>
        <p className="text-muted">john.doe@example.com</p>
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
                  <strong>Full Name:</strong> John Doe
                </p>
                <p>
                  <strong>Email:</strong> john.doe@example.com
                </p>
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
              </div>

              {/* Right side of info */}
              <div className="col-md-6">
                <p>
                  <strong>City:</strong> New York
                </p>
                <p>
                  <strong>Country:</strong> USA
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
