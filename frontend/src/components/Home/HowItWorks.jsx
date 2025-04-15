import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <Link to={"/register"}>
                <p>Create Account</p>
                <p>
                  Sign up by entering your details, verifying your email, and securing your 
                  account with encrypted password storage.
                </p>
              </Link>
            </div>
            <div className="card">
              <MdFindInPage />
              <Link to={"/job/getall"}>
                <p>Find a Job/Post a Job</p>
                <p>
                  Discover exciting career opportunities or connect with top talent to build your dream team.
                </p>
              </Link>
            </div>
            <div className="card">
              <IoMdSend />
              <Link to={"/applications/me"}>
                <p>Apply For Job/Recruit Suitable Candidates</p>
                <p>
                  Apply for roles that match your aspirations or recruit the best 
                  candidates to drive your organization’s success.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
