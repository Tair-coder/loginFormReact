import React from 'react'
import style from './Header.module.css'
import Button from '../UI/Button'
function Header(props) {
    function exitHandler() {
        props.boolChanger()
    }
  return (
    <header className={style.head}>
        <h2 className={style.title}>React login-form</h2>
        <Button class={style.exit} type="button" onClick={exitHandler}>Выйти</Button>
    </header>
  )
}

export default Header