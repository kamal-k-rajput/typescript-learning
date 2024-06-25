import React from "react";

export const PageTitle = ({ props }: any) => {
  return (
    <>
      <div id="Hero" className="section page-hero">
        <div className="container-default">
          <div className="hero-wrapper">
            <div
              data-w-id="d6b247da-2d3e-3944-5a1c-bbc41e1d1694"
              className="vertical-center"
            >
              <h1 className="page-title">{props.title}</h1>
              <p className="large-paragraph text-center white-text">
                {props.description}
              </p>
              <div className="mg-top-18">
                <a
                  href="/contact"
                  className="button-primary large white w-button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
