import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterBottom from "./FooterBottom";
import { motion } from "framer-motion";

const hoverEffect = {
  scale: 1.1,
  textShadow: "0px 0px 8px rgb(255,255,255)",
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="pt-5">
          <div className="row">
            {/* Section 1 */}
            <div className="col-7 col-sm-4 col-md-3 mb-3">
              <a
                href="/"
                className="footer-logo d-flex align-items-center mb-3 mb-sm-0 me-sm-auto link-body-emphasis text-decoration-none"
              >
              <img 
              src="/images/rehab-logo1.png"
              alt="logo"
              style={{ width: "9.5rem", height: "2.9375rem"}}
            />

              </a>
              <p>
              Our company offers a range of serivces to help you create and maintain your ideal space.
              <br />
              <br />
              We offers Architecture Designs, taking your vision and bringing it to life by building custom properties
              </p>
              
            </div>

            {/* Section 2 */}
            <div className="col-5 col-sm-4 col-md-2 mb-3 contacts-col">
              <h5>Contacts</h5>
              <div className="contact-details">
                <div className="flex-item">
                  <img src="/images/call-icon.png" alt="call-icon" />
                </div>
                <div className="flex-item">
                  <motion.a whileHover={hoverEffect} href="tel:13136453395">
                    1 - 313 - 645 - 3395
                  </motion.a>
                  <br />
                  <motion.a whileHover={hoverEffect} href="tel:14699702609">
                    1 - 469 - 970 - 2609
                  </motion.a>
                </div>
              </div>
              <div className="contact-details">
                <div className="flex-item">
                  <img src="/images/address-icon.png" alt="call-icon" />
                </div>
                <div className="flex-item">
                  <p>2047 Cyrus Viaduct</p>
                  <p>Alexandria, Egypt</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="col-5 col-sm-4 col-md-1 mb-3 company-col">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <img src="images/list.png" alt="list-arrow" />
                  <motion.a
                    whileHover={hoverEffect}
                    href="/about-us"
                    className="nav-link"
                  >
                    ABOUT
                  </motion.a>
                </li>
                <li className="nav-item">
                  <img src="images/list.png" alt="list-arrow" />
                  <motion.a
                    whileHover={hoverEffect}
                    href="/services"
                    className="nav-link"
                  >
                    SERVICES
                  </motion.a>
                </li>
                <li className="nav-item">
                  <img src="images/list.png" alt="list-arrow" />
                  <motion.a
                    whileHover={hoverEffect}
                    href="/projects"
                    className="nav-link"
                  >
                    PROJECTS
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-7 col-sm-4 col-md-3 mb-3 subsc-col">
              <h5>Subscribe to Our News</h5>
              <p className="subscribeParag">
                Find out about the last days and the latest promotions of our
                Corporation
              </p>
              <form>
                <div className="form-row">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                    <button class="btn" type="button" id="button-addon2">
                      <motion.img
                        src="/images/sub-button.png"
                        alt="send button"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0px 0px 8px rgb(255,198,49)",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <FooterBottom />
        </footer>
      </div>
    </div>
  );
}
