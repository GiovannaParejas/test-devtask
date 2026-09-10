import React from "react"
import "./TituloAdicionarTarefa.css"

const TituloAdicionarTarefa = ({children}) => {
  return (
    <h2 className="adicionar-tarefa-titulo">{children}</h2>
  )
}

export default TituloAdicionarTarefa