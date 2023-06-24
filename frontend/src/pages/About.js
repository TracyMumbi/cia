import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3"  data-aos="fade-up"
     data-aos-duration="3000">
        <div className="card border-0 shadow-sm">
          <div className="row no-gutters ">
            <div className="col-md-4">
              <img
                src="img/DSC_0053.JPG"
                className="card-img img-fluid"
                alt="Farmart"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">About Us</h1>
                <hr />
                <p className="lead">
                  Christ in Action is a kind and helpful organization that
                  assists people during difficult times. We follow Christian
                  beliefs and work to bring hope and support to those facing
                  crisis. We have volunteers who are trained and ready to help
                  in different ways. Whether it's responding to natural
                  disasters, emergencies, or personal struggles, Christ in
                  Action wants to provide immediate help and also help people
                  recover in the long run. We offer practical assistance,
                  emotional comfort, and spiritual guidance to show love and
                  bring healing to those in need. Christ in Action aims to be a
                  source of hope and strength when things are tough.
                  {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
