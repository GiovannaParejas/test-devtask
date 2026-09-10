import React from "react";
import "./CampoDeEntradaTarefa.css";

// "dados" aqui é o objeto de props usado como objeto inteiro
// pra poder espalhar tudo de uma vez com o spread operator abaixo
const CampoDeEntradaTarefa = (dados) => {
  // não é um hook, é só uma variável derivada, calculada a cada
  // renderização, que verifica se "value" está vazio (string vazia
  // é "falsy" em JS, então !dados.value vira true quando não há valor)
  const estaVazio = !dados.value;

  return (
    <input
      // template string: monta a classe condicionalmente. Se estaVazio
      // for true, adiciona a classe extra pro CSS aplicar a cor cinza
      className={`campo-de-entrada-tarefa ${
        estaVazio ? "campo-de-entrada-tarefa-vazio" : ""
      }`}
      // spread operator: espalha todas as props recebidas (value, onChange,
      // type, id, placeholder, name, etc.) direto no elemento <input>,
      // sem precisar listar cada uma manualmente

      {...dados}
      required
    />
  );
};

export default CampoDeEntradaTarefa;
