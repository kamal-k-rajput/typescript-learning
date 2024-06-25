import React from "react";

export const WhyUs = () => {
  return (
    <>
      <div className="section section-why-us">
        <div className="container-default w-container">
          <div className="w-layout-grid split-section-grid">
            <div className="hidden-tablet"></div>
            <div className="split-column image why-us">
              <div
                className="background-object-why-us"
                style={{
                  transform:
                    "translate3d(38px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) transform-style:preserve-3d",
                }}
              >
                <img
                  src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e31218be800ca63e977d7d8_background-object-why-us.svg"
                  alt=""
                />
              </div>
              <div className="transition-bg-image why-us"></div>
              <div
                style={{ display: "block" }}
                className="transition-bg-solid about-us"
              ></div>
            </div>
            <div
              id="w-node-adf76295-6499-d943-66f9-d1bce0d3c975-0b1ddc26"
              className="split-column content"
            >
              <div className="justify-column">
                <div className="subheading-wrapper">
                  <div className="subheading">Why Us</div>
                  <div className="sufix-line"></div>
                </div>
                <h2>Your Well-Being is our Main Priority.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  mauris nulla tincidunt fermentum. Sagittis pellentesque.
                </p>
                <div className="mg-top-32px">
                  <a
                    href="/about-us"
                    className="button-primary default w-button"
                  >
                    Why Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
