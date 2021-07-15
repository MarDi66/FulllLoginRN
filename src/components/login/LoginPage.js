/* eslint-disable prettier/prettier */
import React from 'react'
import { useState } from 'react'
import { Text, View } from 'react-native'
import IEDFormButton from './partials/IEDFormButton'
import IEDFormInput from './partials/IEDFormInput'

const LoginPage = ({ navigation }) => {

    // State local
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState(true)
    const [ passwordError, setPasswordError ] = useState(true)


    // Constantes
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const specialCharFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/


    // Handlers
    const handleLogin = () => {

        // Trim des inputs
        const trimmedEmail = email.trim()
        const trimmedPassword = password.trim()
        
        // Check des inputs
        if (trimmedEmail.match(mailformat) && trimmedPassword.length >= 6 && trimmedPassword.match(specialCharFormat)) {
            navigation.navigate('Landing', { isCollaborator: trimmedEmail.includes('@inextenso.fr') })
        }

    }

    const handleChangeEmail = value => {
        const trimmedEmail = value.trim()
        setEmail(trimmedEmail)
        setEmailError(!mailformat.test(trimmedEmail))
    }
    const handleChangePassword = value => {
        setPassword(value)
        setPasswordError(value.length < 6 || !specialCharFormat.test(value))
    }

    return (
        <>

            <Text style={{ marginBottom: 20 }}>Connectez vous à votre compte</Text>

            <IEDFormInput 
                email={ email } 
                setEmail={ handleChangeEmail } 
                password={ password } 
                setPassword={ handleChangePassword } 
                emailError={ emailError }
                passwordError={ passwordError }
            />

            <IEDFormButton 
                handleLogin={ handleLogin } 
                isDisabled={ emailError || passwordError }
            />

        </>

    )

}

export default LoginPage