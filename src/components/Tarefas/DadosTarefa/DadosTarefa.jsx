import React from "react"
import "./DadosTarefa.css"

const DadosTarefa = ({className, children}) => {
  return (
    <span className={className}>{children}</span>
  )
}

export default DadosTarefa