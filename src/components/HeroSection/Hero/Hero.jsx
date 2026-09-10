import React from "react";
import Botao from "../BotaoHero/BotaoHero.jsx";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-titulo">DevTask</h1>
        <h2 className="hero-sub">
          Sua lista de tarefas, do jeito que um dev precisa
        </h2>
        <p className="hero-paragrafo">
          Cadastre, filtre e conclua suas tarefas com uma interface leve feita
          pra quem programa
        </p>
      </div>
      <div className="hero-botoes">
        {/* BotaoHero renderizado como <a href="#adicionarTarefa">:
            ao clicar, o navegador rola até o elemento com esse id
            (precisa existir um id="adicionarTarefa" em algum lugar
            da página — no card do formulário, por exemplo) */}
        <Botao href="#adicionarTarefa" className="botao-azul botao">
          Adicionar tarefa
        </Botao>
        {/* mesma lógica, mas rolando até id="verTarefas" — que já
            existe na div .tarefas do ListaDeTarefas */}
        <Botao href="#verTarefas" className="botao-branco botao">
          Ver tarefas
        </Botao>
      </div>
    </div>
  );
};

export default Hero;
