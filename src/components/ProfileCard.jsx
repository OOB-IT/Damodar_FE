import React from "react";
import "./ProfileCard.scss";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ProfileCard = (props) => {
  return (
    <div className='outer-div'>
      <div className='inner-div'>
        <div className='front'>
          <div className='front__bkg-photo'></div>
          <img
            className='front__face-photo'
            src={props.data ? props.data.image : ""}
            alt='Profile'
          />
          <div className='front__text'>
            <h3 className='front__text-header'>
              {props.data ? props.data.name : ""}
            </h3>
            <p className='front__text-para'>
              <i className='fas fa-map-marker-alt front-icons'></i>
              {props.data ? props.data.designation : ""}
            </p>
            {/* <span className='front__text-hover'>Hover to Find Me</span> */}
          </div>
        </div>
        <div className='back'>
          <p style={{ textAlign: "left" }}>
            {props.data ? props.data.bio : ""}
          </p>
          <div className='social-media-wrapper'>
            <a
              href={props.data ? props.data.fbLink : "#"}
              target='_blank'
              className='social-icon'>
              <FaFacebook />
            </a>
            <a
              href={props.data ? props.data.instaLink : "#"}
              target='_blank'
              className='social-icon'>
              <FaInstagram />
            </a>
            <a
              href={props.data ? props.data.linkedInLink : "#"}
              target='_blank'
              className='social-icon'>
              <FaLinkedin />
            </a>
            <a
              href={props.data ? props.data.waLink : "#"}
              target='_blank'
              className='social-icon'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
