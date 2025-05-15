
import { useState } from "react"
import { useStore } from "./components/userstate"
import  "./App.css"


function App() {

    const {getState, updateState} = useStore()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState()
  // const [confirmPassword, setConfirmPassword] = useState()
    const [emailError, setEmailError] = useState(null)
    const [passwordError,  setPasswordError] = useState(null)
   const [confirmPasswordError, setConfirmPasswordError] = useState(null)

   const formError = emailError || passwordError || confirmPasswordError;

  function sendData(updateState) {
    console.log(updateState)

  }
  

    const onEmailBlur = () => {
    if(email.length < 3) {
      setEmailError('Неверный Email. Должно быть не меньше 3 символов.')
    }
  }

  const onPasswordBlur = () => {
    if(password.length < 3) {
      setPasswordError('Пароль должен быть больше 3 символов')
    }
  }
  const onConfirmPasswordBlur = () => {
    if(confirmPassword.length < 3) {
      setConfirmPasswordError('Пароль должен содержать больше 3 символов')
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(getState())
  }
  const {email, password, confirmPassword  } = getState()

  const onChange = ({ target }) => { updateState(target.name, target.value)
      

    if(target.name === 'email') {
      if(!/^[\w_@.-]+$/.test(target.value) && target.value.length >= 3) {
          setEmailError('Почта должна содержит недопустимые символы или длинну меньше 3')  
      }else{
        setEmailError(null)
      }
      
    }
    if(target.name === 'password' && target.value.length >= 3) {
      setPasswordError(null)
    }
    if(target.name === 'confirmPassword' && target.value.length >= 3) {
      setConfirmPasswordError(null)
    }
  
  }

  const isInvalid = !email || !password || !confirmPassword || !!formError;


  

  return (
    <>
    <form onSubmit={onSubmit} >
      {formError && <div className="error-message">{formError}</div> }
      <input className="inpit-style"
      type="email"
      name="email"
      placeholder="Email"
      value={email}
      onChange={onChange}
      onBlur={onEmailBlur}
      
      />
      <input className="inpit-style"
      name="password"
      type="password"
      placeholder="Password"
      value={password}
      onChange={onChange}
      onBlur={onPasswordBlur}
      />

      <input className="inpit-style"
      name="confirmPassword"
      type="password"
      placeholder="confirmPassword"
      value={confirmPassword}
      onChange={onChange}
      onBlur={onConfirmPasswordBlur}
      />
      <button className="sub-button"
      type="submit"
      disabled={isInvalid}
      >
        Зарегистрироваться
      </button>
    </form>
    
    </>
  )  
}

export default App
