import React from "react"
import "./DescricaoTarefa.css"


// desestrutura "className" e "children", igual DadosTarefa — a única
// diferença estrutural entre os dois é a tag HTML usada (<p> aqui,
// <span> em DadosTarefa), já que semanticamente uma descrição de
// tarefa é um parágrafo de texto, não um dado inline curto
const DescricaoTarefa = ({className, children}) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default DescricaoTarefa