import React from "react";
import "./BotaoHero.css";

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
