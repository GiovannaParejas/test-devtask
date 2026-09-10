import React from "react";
import "./Label.css";

// desestrutura duas props: "children" (o texto entre as tags, ex: "Nome")
// e "htmlFor" (qual input esse label está associado, pra acessibilidade
// e pra que clicar no texto foque automaticamente o campo correspondente)
const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="label-tarefa">
      {children}
    </label>
  );
};

export default Label;
