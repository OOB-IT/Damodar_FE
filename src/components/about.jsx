import React from "react";
import about from "../asset/about.jpg";
import { Link } from "react-router-dom";

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {" "}
            <img
              src={about}
              style={{ borderRadius: "10px", objectFit: "cover" }}
              className='img-responsive'
              alt=''
            />{" "}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph4 : "loading..."}</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 text-center'>
            <button type='submit' className='btn btn-custom btn-lg rounded'>
              <Link style={{ color: "#f5f5f5" }} to='/company'>
                View More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
