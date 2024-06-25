import { SectionContactUs } from "@/components/Home/SectionContactUs";
import { PageTitle } from "@/components/title/Page.title";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle props={{ title: "Contact Us", descripton: "Loading" }} />

      <SectionContactUs />
    </div>
  );
};

export default page;
