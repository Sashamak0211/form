
import { useState } from "react"
import { useStore } from "./components/userstate"
import  "./App.css"
import { validateForm } from "./components/validate/validateFunction"

function App() {

    const {getState, updateState} = useStore()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState()
  // const [confirmPassword, setConfirmPassword] = useState()
    const [emailError, setEmailError] = useState(null)
    const [passwordError,  setPasswordError] = useState(null)
   const [confirmPasswordError, setConfirmPasswordError] = useState(null)

   const formError = emailError || passwordError || confirmPasswordError;

    const onEmailBlur = () => {
      const { email } = getState()
      const errors = validateForm({ email })
      setEmailError(errors.email || null)
  }

  const onPasswordBlur = () => {
    const { password } = getState()
    // if(password.length < 3) {
    //   setPasswordError('Пароль должен быть больше 3 символов')
    // }
    const errors = validateForm({password})
    setPasswordError( errors.password || null )
  }
  const onConfirmPasswordBlur = () => {
    const { password, confirmPassword } = getState()
    // if(confirmPassword.length < 3) {
    //   setConfirmPasswordError('Пароль должен содержать больше 3 символов');
    // } else if( password !== confirmPassword) {
    //   setConfirmPasswordError('Пароли не совпадают')
    // }
    const errors = validateForm({password, confirmPassword})
    setConfirmPasswordError(errors.confirmPassword || null)
  };

   const onChange = ({ target }) => { 
    const { name, value } = target;
    updateState(name, value)
      


    if(name === 'email') {
      if(!/^[\w_@.-]+$/.test(value)) {
          setEmailError('Почта должна содержит недопустимые символы')  
      }else if( value.length <= 3) {
        setEmailError('Почта меньше 3 симловов')
      }
      else{
        setEmailError(null)
      }
      
    }
    if(name === 'password' ) {
      if( value.length < 3) {
       setPasswordError('Пароль должен быть больше 3 символов')
    }else {
      setPasswordError(null)
    }
    }
    if(name === 'confirmPassword') {
      const { password } = getState();
      if(value !== password) {
        setConfirmPasswordError('Пароли не совпадают')
      } else {
        setConfirmPasswordError(null)
      }
    }
      
    }

  const onSubmit = (event) => {
    event.preventDefault();
    const state = getState()
    console.log('Данные пошли', state);
    
  }
  const {email, password, confirmPassword  } = getState()

 
  
  

  

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
