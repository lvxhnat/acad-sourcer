import React from 'react'
import {Link} from 'react-router-dom'
export default function StyledLink(props) {
  console.log(props)
  return (
    <Link
      style={{color: 'blue', textDecoration: 'none', fontSize: '0.7vw'}}
      to={{pathname: props.link}}
      target="_blank">
      {props.item}
    </Link>
  )
}
