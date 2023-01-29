import React, { Fragment, useState } from 'react'
import Card from '../UI/Card'
import image from '../img/Image.png'
import './Main.css'
import Form from './Form';
import Home from '../Account/Home'
function Main() {
  const [bool,setBool] = useState(false)
  const changeBoolHandler = (param)=> {
    setBool(param)
  }
  return (
    <Card class={'log'}>
      {bool ? <Home bool={changeBoolHandler}/> : 
      <Fragment>
      <img className="bg_fone" src={image}/>
      <Form changeBool={changeBoolHandler}/>
      </Fragment>
      }
    </Card>
  )
}

export default Main