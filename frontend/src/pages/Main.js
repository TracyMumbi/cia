import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Main = () => {
  return (
    <>
      <div className="container ">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="img/1.JPG" alt="First slide" duration={4000} />
            <Carousel.Caption>
              <h3>Christ in Action Missions</h3>
              <p>
                Charity is an essential aspect of a compassionate society, as it
                enables individuals and organizations to extend their kindness,
                resources, and support to those in need.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/2.JPG"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Christ in Action Missions</h3>
              <p>
                Charity is really important because it helps people who are in
                difficult situations or don't have enough resources. It's a way
                for kind-hearted individuals and groups to give their help,
                support, and resources to those who need it the most..
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/3.JPG" alt="Third slide" />

            <Carousel.Caption>
              <h3>Christ in Action Missions </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/coder.jpg"
            alt="Card"
            height={1000}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container mt-3" style={{position:'absolute',top:0,left:0}}>
            <h5 className="card-title fs-1 text fw-bold" style={{ color: 'black', textAlign: 'center', margin: 3 }}>Welcome to Farmat</h5>
                <p className="card-text fs-5 d-none d-sm-block " style={{ color: 'black', textAlign: 'center', margin: 3 }}>
                  Buy farm animals directly from farmers and support their livelihoods
                </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Main;
