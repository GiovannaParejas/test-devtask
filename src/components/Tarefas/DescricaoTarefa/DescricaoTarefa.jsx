import React from "react"
import "./DescricaoTarefa.css"

const DescricaoTarefa = ({className, children}) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default DescricaoTarefa