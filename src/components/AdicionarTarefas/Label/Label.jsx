import React from "react";
import "./Label.css";

const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="label-tarefa">
      {children}
    </label>
  );
};

export default Label;
