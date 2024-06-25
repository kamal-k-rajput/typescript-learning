import React from "react";
import "./Heading.css";
type IHeadingProps = {
  //   color: string;
  title: string;
};

export const H1 = (props: IHeadingProps) => {
  return (
    <h1 className="mb-2 mt-0 text-5xl font-bold leading-tight text-secondary">
      {props.title}
    </h1>
  );
};
