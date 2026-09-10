import React from "react";
import "./BotaoAdicionarTarefa.css";

const BotaoAdicionarTarefa = () => {
  return (
    // type="submit" faz esse botão disparar o evento onSubmit do <form>
    // que o envolve (nesse caso, o formulário em ListaDeTarefas, que
    // chama adicionarTarefa quando esse botão é clicado)
    <button type="submit" className="botao-adicionar-tarefa">
      Cadastrar
    </button>
  );
};

export default BotaoAdicionarTarefa;
