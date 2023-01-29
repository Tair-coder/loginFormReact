import './Form.css'
import Card from '../UI/Card'
import { useState,useEffect } from 'react'
import Button from '../UI/Button';
function Form(props) {
    const [emailInput,setEmailInput] = useState("");
    const [passwordInput,setPasswordInput] = useState("");
    // useEffect(()=> {
    //     setEmailBool(!emailInput.includes('@'))
    // },[emailInput])
    const [emailIsValid,setEmailIsValid] = useState();
    const [passwordIsValid,setPasswordIsValid] = useState();
    const changeEmailHandler = (e) => {
        setEmailInput(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPasswordInput(e.target.value)
    }
    const submitFormHandler = (e) => {
        e.preventDefault()
        if(emailIsValid && passwordInput){
            props.changeBool(true)
        }
    }
    const emailOnBlur = () => {
        setEmailIsValid(emailInput.includes('@'))
    }
    const passwordOnBlur = () => {
        setPasswordIsValid(passwordInput.trim().length > 7)
    }
    return (
    <Card class={'form'}>
        <h1>Авторизоваться</h1>
        <p>Войдите в систему</p>
        <form className='form_form' onSubmit={submitFormHandler}>
            <label className='label'>Email</label>
            <input type='text' className={`input ${emailIsValid === false ? 'wrong' : ''}` } value={emailInput} onChange={changeEmailHandler} onBlur={emailOnBlur}/>
            <label className='label'>Пароль</label>
            <input type='password' className={`input two ${passwordIsValid === false ? 'wrong' : ''}` } value={passwordInput} onChange={changePasswordHandler} onBlur={passwordOnBlur}/>
            <Button type='submit' className='btn'>Войти</Button>
            <span>Нету аккаунта? <a href=''>Создать новый</a>.</span>
        </form>
    </Card>
  )
}

export default Form