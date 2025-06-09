import React from "react";
// import { Link } from "react-router-dom";

const ProfileCard = (props) => {

  return (
    <div className="col">
      <div className="shadow-lg card text-center p-3 img-fluid" data-aos = "zoom-in"  data-aos-duration='1000'>
        <div>
          <img
            className="card-img-top"
            style={{ maxHeight: 200 + "px" }}
            src={props.photo}
            alt="Profile"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text small">{props.role}</p>
          <p className="card-text">{props.desc}</p>
        </div>
        {/* <p>
          {mail_icon} 
          <span> - </span>
          <a href="/" className="link-opacity-75-hover">
            {props.email}
          </a>
        </p> */}
        {/* <a href={props.insta} target="_blank_">
          <button className="btn btn-primary rounded-pill">
            {insta_icon}
            <span> Instagram</span>
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default ProfileCard;
