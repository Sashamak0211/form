    export const validateForm = (formDate) => {
        const errors = {}
        
        if(!formDate.email) {

            errors.email = 'Поле обязательно для заполнения'
        }else if(formDate.email < 3) {
            errors.email = 'Неверный Email. Должно быть не меньше 3 символов.';
        } else if(!/^[\w_@.-]+$/.test(formDate.email) ) {
            errors.email = 'Почта должна содержит недопустимые символы'
        };

        if(!formDate.password) {
            errors.password = 'Поле обязательно для заполнения'
        }else if (formDate.password.length < 3) {
          errors.password = 'Пароль должен быть длинее 3 символов'
        };

        if(!formDate.confirmPassword) {
          errors.confirmPassword = 'Поле обязательно для заполнения'
        }else if(formDate.confirmPassword.length < 3) {
          errors.confirmPassword = 'Пароль должен быть длинее 3 символов'
        }else if(formDate.confirmPassword !== formDate.password) {
          errors.confirmPassword = 'Пароли не совпадают'
        }

        return errors


    };
    
  //   const onEmailBlur = () => {
  //     const { email } = getState()
  //   if(email.length < 3) {
  //     setEmailError('Неверный Email. Должно быть не меньше 3 символов.')
  //   }
  // }

  // const onPasswordBlur = () => {
  //   const { password } = getState()
  //   if(password.length < 3) {
  //     setPasswordError('Пароль должен быть больше 3 символов')
  //   }
  // }
  // const onConfirmPasswordBlur = () => {
  //   const { password, confirmPassword } = getState()
  //   if(confirmPassword.length < 3) {
  //     setConfirmPasswordError('Пароль должен содержать больше 3 символов');
  //   } else if( password !== confirmPassword) {
  //     setConfirmPasswordError('Пароли не совпадают')
  //   }
  // };