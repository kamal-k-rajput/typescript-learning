import { AboutUs } from "@/components/Home/AboutUs";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutUs />
      <div className="section bg-grey">
        <div className="container-default">
          <div className="w-layout-grid grid-2-colums-content">
            <div className="content right">
              <h2>
                Our Qualified Team is Always Ready to Help You!
                <br />
              </h2>
              <p className="mg-bototm-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
                nulla tincidunt fermentum. Sagittis pellentesque.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Non mauris nulla
                tincidunt fermentum. Sagittis pellentesque.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e6302fa58df44a3e36e6e81_about-us-medica-template.jpg"
              sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1080px"
              srcSet="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e6302fa58df44a3e36e6e81_about-us-medica-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e6302fa58df44a3e36e6e81_about-us-medica-template.jpg 1101w"
              alt="Our Qualified Team - Medica Webflow Template"
              className="image-border"
            />
          </div>
          <div className="w-layout-grid grid-2-colums-content">
            <img
              src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e630284191f2a738d0f12d3_Mask%20Group.jpg"
              sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1080px"
              srcSet="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e630284191f2a738d0f12d3_Mask%20Group-p-1080.jpeg 1080w, https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e630284191f2a738d0f12d3_Mask%20Group.jpg 1101w"
              alt="Your Well-Being | Medica Webflow Template"
              className="image-border"
            />
            <div className="content left">
              <h2>
                Your Well-Being is
                <br />
                our Main Priority.
                <br />
              </h2>
              <p className="mg-bototm-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
                nulla tincidunt fermentum. Sagittis pellentesque.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Non mauris nulla
                tincidunt fermentum. Sagittis pellentesque.
              </p>
            </div>
          </div>
          <div className="w-layout-grid grid-2-colums-content">
            <div
              id="w-node-eeba88c1-85fc-93b5-5af6-c5bcf4a4ab78-4802946c"
              className="content right"
            >
              <h2>
                We don't treat patients,
                <br />
                we treat human beings.
              </h2>
              <p className="mg-bototm-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                mauris nulla tincidunt fermentum. Sagittis pellentesque. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
                nulla tincidunt fermentum. Sagittis pellentesque.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Non mauris nulla
                tincidunt fermentum. Sagittis pellentesque.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e6302846f973410d187dfe7_Mask%20Group-1.jpg"
              sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1080px"
              srcSet="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e6302846f973410d187dfe7_Mask%20Group-1-p-1080.jpeg 1080w, https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e6302846f973410d187dfe7_Mask%20Group-1.jpg 1101w"
              alt="Hospital Patients | Medica Webflow Template"
              className="image-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
