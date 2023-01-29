import React, { Fragment } from 'react'
import Tick from './Tick'
import Header from './Header'
import style from './Home.module.css'
function Home(props) {
    function boolChangerHandler() {
        console.log('work')
        props.bool(false)
    }
  return (
    <div className={style.nav}>
        <Header boolChanger={boolChangerHandler}/>
        <Tick/>
    </div>
  )
}

export default Home