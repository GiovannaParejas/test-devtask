import React from "react"
import "./TituloTarefa.css"

// desestrutura "className" e "children", mesmo padrão de DadosTarefa
// e DescricaoTarefa — só troca a tag pra <h3>, já que semanticamente
// é o título de cada card de tarefa (nível de cabeçalho abaixo do
// <h2> de "Tarefas")
const TituloTarefa = ({className, children}) => {
  return (
    <h3 className={className}>{children}</h3>
  )
}

export default TituloTarefa