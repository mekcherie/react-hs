import React from 'react'
// import logo from './logo.svg'
import { Link } from 'react-router-dom';


function Content(props) {

  const { title, image, info, id } = props
  console.log(image)
  return (
    <div className="Content">

      <h1>
          <h3>{title}</h3>
      </h1>
      <h5>
          <h3>{info}</h3>
      </h5>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}
         width="300" height="300" alt="Hello" />

      </div>
  )
} 

export default Content