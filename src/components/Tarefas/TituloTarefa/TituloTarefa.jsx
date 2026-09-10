import React from "react"
import "./TituloTarefa.css"

const TituloTarefa = ({className, children}) => {
  return (
    <h3 className={className}>{children}</h3>
  )
}

export default TituloTarefa