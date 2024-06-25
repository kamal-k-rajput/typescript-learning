"use client";
import { H1 } from "@/components/headings/H1";
import Image from "next/image";
import { ContactSection } from "@/components/Home/ContactSection";
import { AboutUs } from "@/components/Home/AboutUs";
import { WhyUs } from "@/components/Home/WhyUs";
import { OurServices } from "@/components/Home/OurServices";
import { Section } from "@/components/Home/Section";
import { SectionContactUs } from "@/components/Home/SectionContactUs";
import { SectionBanner } from "@/components/Home/SectionBanner";
import "./home.css";

export default function Home() {
  return (
    <main>
      <div>
        <div id="Hero" className="full-image-section">
          <div className="container-default w-container">
            <div className="w-layout-grid split-section-grid">
              <div
                id="w-node-af684ee7-055e-79ef-1b13-d5aa208aae56-0b1ddc26"
                className="split-column content"
              >
                <div className="justify-column hero">
                  <div className="subheading-wrapper">
                    <div className="subheading accent">Hospital Center</div>
                    <div className="sufix-line"></div>
                  </div>
                  <h1>Healthcare for Family’s Health</h1>
                  <p className="large-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                    mauris nulla tincidunt fermentum. Sagittis pellentesque.
                  </p>
                  <div className="mg-top-32px">
                    <a
                      href="/appointment"
                      className="button-primary large w-button"
                    >
                      Book an Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="split-column image hero">
                <div
                  style={{
                    opacity: "1",
                    willChange:
                      "transform; transform: translate3d(-86px, 65px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d",
                  }}
                  className="bg-object-1---hero"
                >
                  <img
                    src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e310425e800ca41f276c5f9_background-object-1-hero.svg"
                    alt=""
                  />
                </div>
                <div style={{ opacity: "1" }} className="bg-object-2---hero">
                  <img
                    src="https://assets-global.website-files.com/5e30f06b05f79621331ddc25/5e310615cf36f636714a14ee_background-object-2-hero.svg"
                    alt=""
                  />
                </div>
                <div className="transition-bg-image hero"></div>
                <div
                  style={{ display: "block", width: "0px", height: "460px" }}
                  className="transition-bg-solid"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      <AboutUs />
      <WhyUs />
      <OurServices />
      <SectionBanner />
      <Section />
      <SectionContactUs />
    </main>
  );
}

// w-layout-grid split-section-grid
