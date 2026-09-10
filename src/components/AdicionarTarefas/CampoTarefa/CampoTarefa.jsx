import React from "react";
import "./CampoTarefa.css";

const CampoTarefa = ({ children }) => {
  return <fieldset className="campo-tarefa-fieldset">{children}</fieldset>;
};

export default CampoTarefa;
