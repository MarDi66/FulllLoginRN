/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const IEDFormInput = ({ email, setEmail, password, setPassword, passwordError, emailError }) => {

    return (
        <>

            <TextInput 
                value={ email }
                onChangeText={ value => setEmail(value) }
                placeholder='Email' 
                style={ { ...styles.login_input, borderColor: !emailError ? '#E0E0E0' : '#FF0000' } } 
            />
            { emailError && <Text style={ styles.error_message }>Adresse email non valide</Text> }

            <TextInput 
                value={ password }
                onChangeText={ value => setPassword(value) }
                placeholder='Mot de passe' 
                style={ { ...styles.login_input, borderColor: !passwordError ? '#E0E0E0' : '#FF0000' } } 
                secureTextEntry
            />
            { passwordError && <Text style={ styles.error_message }>Format de mot de passe non valide</Text> }

        </>
    )

}

const styles = StyleSheet.create({

    login_input: {
        borderWidth: .5,
        borderRadius: 5, 
        marginBottom: 15,
        padding: 10
    }, 

    error_message: {
        color: '#FF0000', 
        marginBottom: 20,
        marginTop: -10, 
        fontSize: 10
    }

})

export default IEDFormInput