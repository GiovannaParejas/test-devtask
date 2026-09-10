import React from 'react'
import "./TituloTarefas.css"

const TituloTarefas = ({children}) => {
  return (
    <h2 className="tarefas-titulo">{children}</h2>
  )
}

export default TituloTarefas