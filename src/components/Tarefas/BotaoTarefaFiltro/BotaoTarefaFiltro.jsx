import React from "react"
import "./BotaoTarefaFiltro.css"

const BotaoTarefaFiltro = ({children, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default BotaoTarefaFiltro