import React from 'react'

export default function Title (props) {
  const render = () => {
    if (!props.text) return "React Component Library"

    return props.text
  }

  return (
    <h1>{render()}</h1>
  )
}