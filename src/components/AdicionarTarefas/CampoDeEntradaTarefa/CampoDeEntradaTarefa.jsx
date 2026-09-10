import React from "react";
import "./CampoDeEntradaTarefa.css";

const CampoDeEntradaTarefa = (dados) => {
  const estaVazio = !dados.value;

  return (
    <input
      className={`campo-de-entrada-tarefa ${
        estaVazio ? "campo-de-entrada-tarefa-vazio" : ""
      }`}
      {...dados}
      required
    />
  );
};

export default CampoDeEntradaTarefa;
