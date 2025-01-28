import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

export default function ContactUs() {
  return (
    <div>
      <div className="contact-page">
        <div className="container" id="featured-3">
          <div className="hero-contact col-xxl-12">
            <div className="flex-item contact-form">
              <img
                className="yellow-line"
                src="/images/pseudo.png"
                alt="yellowline"
              />
              <h6>CONTACT US</h6>

              <h2 className="feature-top-h2">
                Do You Have <br /> any{" "}
                <span className="blue-h2">Questions?</span>
              </h2>
              <form>
                <div className="row g-4">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      aria-label="Full name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      aria-label="Phone"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="text-row">
                  <div className="form-group">
                    <textarea
                      className="form-control custom-textarea"
                      id="message"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </div>
                <Button buttonText="SEND MESSAGE" />
              </form>
            </div>
            <div className="flex-item contactImg">
              <img className="deskImg" src="/images/contact.svg" alt="desk" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
