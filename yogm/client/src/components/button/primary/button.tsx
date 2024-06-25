import React from "react";

interface IProps {
  title: string;
}

export const PrimaryButton = (props: IProps) => {
  return <button className="btn-primary btn-small">{props.title}</button>;
};
