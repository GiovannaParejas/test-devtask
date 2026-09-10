import React from "react";
import "./BotaoHero.css";

// desestrutura três props: "children" (texto do link/botão), "href"
// (destino do link) e "className" (permite customizar o estilo de
// fora, caso existam variações de aparência pra esse botão)
const BotaoHero = ({ children, href, className }) => {
  return (
    <>
      <a href={href} className={className}>
        {children}
      </a>
    </>
  );
};

export default BotaoHero;
