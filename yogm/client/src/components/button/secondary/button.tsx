import React from "react";
interface IProps {
  title: string;
}

export const SecondaryButton = (props: IProps) => {
  return <button className="btn-secondary btn-small">{props.title}</button>;
};
