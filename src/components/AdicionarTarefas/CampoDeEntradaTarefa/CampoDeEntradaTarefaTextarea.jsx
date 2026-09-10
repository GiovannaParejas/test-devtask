import React from "react";
import "./CampoDeEntradaTarefa.css";

const CampoDeEntradaTarefaTextarea = (dados) => {
  return (
    <textarea
      className="campo-de-entrada-tarefa campo-de-entrada-tarefa-textarea"
      // spread operator: repassa value, onChange, id, placeholder, name, etc.
      // vindos do componente pai (ListaDeTarefas) direto pro <textarea>
      {...dados}
      required
    />
  );
};

export default CampoDeEntradaTarefaTextarea;
