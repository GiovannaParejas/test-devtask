import React from 'react'
import "./TituloTarefas.css"

// desestrutura só "children", igual TituloAdicionarTarefa, com
// className fixa em vez de recebida por prop (diferente de
// DadosTarefa/DescricaoTarefa/TituloTarefa, que recebem className
// dinamicamente)
const TituloTarefas = ({children}) => {
  return (
    <h2 className="tarefas-titulo">{children}</h2>
  )
}

export default TituloTarefas