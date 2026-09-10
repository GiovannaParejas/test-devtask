import React from "react";
import "./CampoTarefa.css";

// desestrutura "children" direto dos props recebidos, é o conteúdo
// que fica entre as tags <CampoTarefa> e </CampoTarefa> quando esse
// componente é usado (no caso, o <Label> + o campo de entrada juntos)
const CampoTarefa = ({ children }) => {
  return <fieldset className="campo-tarefa-fieldset">{children}</fieldset>;
};

export default CampoTarefa;
