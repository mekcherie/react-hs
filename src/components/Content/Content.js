import React from 'react'
// import logo from './logo.svg'
import { Link } from 'react-router-dom';


function Content(props) {

  const { title, image, info, id } = props
  console.log(image)
  return (
    <div className="Content">

      <div className="hs"> 
        <h1> {title} </h1>
        <h5>{info}</h5>
      </div> 
      
      <div className="HS">
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}
         width="300" height="300" alt="Hello" />
      </div>
      </div>
  )
} 

export default Content