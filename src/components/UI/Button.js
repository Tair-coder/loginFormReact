import React from 'react'
import style from './Button.module.css'

function Button(props) {
  return (
    <button type={props.type}className={`${style.btn} ${props.class}`} onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button