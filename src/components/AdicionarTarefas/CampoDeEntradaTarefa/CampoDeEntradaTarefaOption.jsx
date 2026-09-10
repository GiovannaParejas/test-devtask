import React from "react";
import "./CampoDeEntradaTarefa.css";

const CampoDeEntradaTarefaOption = (dados) => {

  // variável derivada: verifica se nenhuma opção de
  // prioridade foi escolhida ainda, pra aplicar a cor cinza no <select>
  const estaVazio = !dados.value;

  return (
    <select
    // monta a classe condicionalmente, igual no CampoDeEntradaTarefa
      className={`campo-de-entrada-tarefa campo-de-entrada-tarefa-option ${
        estaVazio ? "campo-de-entrada-tarefa-option-vazio" : ""
      }`}
      // spread operator: repassa value, onChange, id, name, etc. vindos
      // do componente pai (ListaDeTarefas) direto pro elemento <select>
      {...dados}
      required
    >
      {/* opção "placeholder": disabled impede que seja selecionada
          manualmente depois, hidden a esconde da lista de opções abertas
          (só aparece como texto inicial quando value="") */}
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
