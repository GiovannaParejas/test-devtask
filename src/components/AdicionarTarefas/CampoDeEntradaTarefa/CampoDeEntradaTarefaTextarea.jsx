import React from "react";
import "./CampoDeEntradaTarefa.css";

const CampoDeEntradaTarefaTextarea = (dados) => {
  return (
    <textarea
      className="campo-de-entrada-tarefa campo-de-entrada-tarefa-textarea"
      {...dados}
      required
    />
  );
};

export default CampoDeEntradaTarefaTextarea;
