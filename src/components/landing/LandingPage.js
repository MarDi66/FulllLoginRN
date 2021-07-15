/* eslint-disable prettier/prettier */
import React from 'react'
import { Button, Image, StyleSheet, Text } from 'react-native'

const LandingPage = ({ route, navigation }) => {

    const { isCollaborator } = route.params

    return (
        <>
            <Image 
                style={ styles.logo }
                source={{uri :'asset:/images/ied-logo.png'}}  
            />

            {
                isCollaborator && <Text style={ styles.text }>Hello Dear Collaborator!</Text>
            }

            <Button title='Déconnexion' color="#FF0000" onPress={ () => navigation.goBack() } />
        </>
    )

}

const styles = StyleSheet.create({
    logo: {
        width: '100%', 
        height: 200,
        resizeMode: 'contain', 
        marginBottom: 20
    },

    text: {
        marginBottom: 10
    }
})

export default LandingPage