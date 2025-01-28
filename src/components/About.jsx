import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

export default function About() {
  return (
    <div>
      <div className="about-page">
        <div className="container" id="featured-3">
          <img
            className="yellow-line"
            src="/images/pseudo.png"
            alt="yellowline"
          />
          <h6>WHAT WE WORK</h6>

          <h2 className="feature-top-h2">
            <span className="blue-h2">About</span> Us
          </h2>
          <div className="hero-about col-xxl-12">
            <div className="flex-item about">
              <div className="heading-num">
                <h1>23+</h1>
                <h6>Active Projects in Civil Engineering</h6>
              </div>
              <div className="heading-num2">
                <h1>45+</h1>
                <h6>Active Projects in Decoration</h6>
              </div>
              <div>
                <p className="description">
                  Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                  ullamcorper malesuada proin Senectus et netus et malesuada.
                  Nunc pulvinar sapien et ligula ullamcorper malesuada
                  proinSenectus et netus et malesuada. Nunc pulvinar sapien et
                  ligula ullamcorper malesuada proinSenectus et netus et
                  malesuada.
                </p>
                <Button buttonText="ABOUT COMPANY" />
              </div>
            </div>
            <div className="flex-item aboutImg">
              <img
                className="mapImg"
                src="/images/map.svg"
                alt="constructionSite"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin1"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin2"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin3"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin4"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin5"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin6"
              />
              <img
                src="/images/map-pin.png"
                alt="pin map"
                className="mapPin7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="whyWorkWithUs">
        <div className="container">
          <div className="row g-4 py-5 m-0 row-cols-1 row-cols-lg-3 feature-flex">
            <div className="feature col withoutborder">
              <div>
                <img
                  className="yellow-line"
                  src="/images/pseudo.png"
                  alt="yellowline"
                />
                <h6>WHY WORK WITH US</h6>
                <h2 className="feature-top-h2">
                  <span className="blue-h2">Design</span> Future with Excellence
                </h2>
              </div>
            </div>
            <div className="feature col">
              <div>
                <img src="images/why1.svg" alt="tennyiconlayer" />
              </div>
              <h3>We Develop Unique Projects</h3>
              <p className="feature-p">
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin
              </p>
            </div>
            <div className="feature col">
              <div>
                <img src="images/why2.svg" alt="tennyiconlayer" />
              </div>
              <h3>We Value Convenience and Functionality</h3>
              <p className="feature-p">
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin
              </p>
            </div>
            <div className="feature col">
              <div>
                <img src="images/why3.svg" alt="tennyiconlayer" />
              </div>
              <h3>Experience Allows Us to Implement Ideas</h3>
              <p className="feature-p">
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin
              </p>
            </div>
            <div className="feature col">
              <div>
                <img src="images/why4.svg" alt="tennyiconlayer" />
              </div>
              <h3>We Offer Innovative Technologies</h3>
              <p className="feature-p">
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin
              </p>
            </div>
            <div className="feature col">
              <div>
                <img src="images/why5.svg" alt="tennyiconlayer" />
              </div>
              <h3>We Focus on Long-term Relationships</h3>
              <p className="feature-p">
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
