import React from "react";
import { H2 } from "../headings/H2";

export const AboutUs = () => {
  return (
    <div className="section section-about-us">
      <div className="container-default w-container">
        <div id="Section2" className="w-layout-grid split-section-grid">
          <div className="split-column content">
            <div className="justify-column">
              <div className="subheading-wrapper">
                <div className="subheading">About us</div>
                <div className="sufix-line"></div>
              </div>
              <h2>Our Qualified Team is Ready to Help You!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque.
              </p>
              <div className="mg-top-32px">
                <a href="/about" className="button-primary default w-button">
                  About Us
                </a>
              </div>
            </div>
          </div>
          <div className="split-column image about-us">
            <div className="background-object-about">
              <img
                src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e3119bab76b837d2e2d5a83_background-object-about-us.svg"
                alt=""
              />
            </div>
            <div className="transition-bg-image about-us"></div>
            <div className="transition-bg-solid about-us"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
