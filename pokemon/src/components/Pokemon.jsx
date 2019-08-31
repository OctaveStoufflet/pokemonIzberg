import React from "react"
import { Link } from "react-router-dom"

function Pokemon({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Pokemon