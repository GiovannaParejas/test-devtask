import React from "react"
import "./BotaoTarefaFiltro.css"

// desestrutura três props: "children" (texto do botão), "className"
// (já vem pronta com a lógica condicional calculada lá no componente
// pai (ListaDeTarefas) indicando se esse filtro está ativo ou não)
// e "onClick" (a callback a ser executada no clique)
const BotaoTarefaFiltro = ({children, className, onClick}) => {
  return (
    // "onClick" aqui não é definida dentro deste componente — ela é
    // repassada exatamente como veio do pai. Quando o ListaDeTarefas
    // usa <BotaoTarefaFiltro onClick={() => setFiltro("todas")}>,
    // essa arrow function passa por aqui e só é executada de fato
    // quando o usuário clica no <button> nativo
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default BotaoTarefaFiltro