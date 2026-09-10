import React from "react";
import Hero from "./components/HeroSection/Hero/Hero";
import ListaDeTarefas from "./components/ListaDeTarefas/ListaDeTarefas";

const App = () => {
  return (
    <>
      <Hero />
      <div className="lista-de-tarefas" id="adicionarTarefa">
        <ListaDeTarefas />
      </div>
    </>
  );
};

export default App;
