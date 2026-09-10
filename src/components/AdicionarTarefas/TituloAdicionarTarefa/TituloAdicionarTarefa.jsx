import React from "react"
import "./TituloAdicionarTarefa.css"

// desestrutura "children" — o texto que fica entre as tags
// <TituloAdicionarTarefa>...</TituloAdicionarTarefa> quando usado
// (nesse caso, "Cadastre uma nova tarefa")
const TituloAdicionarTarefa = ({children}) => {
  return (
    <h2 className="adicionar-tarefa-titulo">{children}</h2>
  )
}

export default TituloAdicionarTarefa