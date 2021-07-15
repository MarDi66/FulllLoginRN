/* eslint-disable prettier/prettier */
import React from 'react'
import { Button } from 'react-native'

const IEDFormButton = ({ handleLogin, isDisabled }) => {

    return <Button title='Se connecter' onPress={ handleLogin } disabled={ isDisabled } />

}

export default IEDFormButton