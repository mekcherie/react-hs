import React from 'react';
import Content from '../Content/Content';
import data from '../../HSINFO-data.json';

function Info() {
const content = data.map(({ title, info, images }, i) => {
  return (

    <Content
      id={i}
      title = {title}
      info = {info}
      image={images[0]}
    />
  )
})
  return (
    <div>{content}</div>
  )
}
export default Info