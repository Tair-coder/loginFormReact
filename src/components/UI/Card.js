import React, { Fragment } from 'react'
import './Card.css'

function Card(props) {
    return (
    <div className={`card ${props.class}`}>
    {props.children}
    </div>
  )
}

export default Card