import React from "react";
import "./CampoDeEntradaTarefa.css";

const CampoDeEntradaTarefaOption = (dados) => {
  const estaVazio = !dados.value;


  return (
    <select
      className={`campo-de-entrada-tarefa campo-de-entrada-tarefa-option ${
        estaVazio ? "campo-de-entrada-tarefa-option-vazio" : ""
      }`}
      {...dados}
      required
    >
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      <option value="alta">Alta</option>
      <option value="media">Média</option>
      <option value="baixa">Baixa</option>
    </select>
  );
};

export default CampoDeEntradaTarefaOption;
