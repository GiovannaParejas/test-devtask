import React from "react"
import "./DadosTarefa.css"

// desestrutura "className" (recebe a classe já calculada no componente
// pai, no ListaDeTarefas, varia entre "tarefas-card-data" e a versão
// dinâmica de prioridade com template string) e "children" (o texto,
// ex: a data formatada ou "Alta"/"Média"/"Baixa")
const DadosTarefa = ({className, children}) => {
  return (
    <span className={className}>{children}</span>
  )
}

export default DadosTarefa