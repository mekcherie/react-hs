import React from 'react'
import data from '../../HSINFO-data.json'

function Const(props) {
  const { id } = props.match.params // Location index
  const { images, title, } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
      </div>
    </div>
  )
}

export default Const