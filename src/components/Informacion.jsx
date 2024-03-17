import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Informacion = ({ title, descripcion }) => {
    return (
        <Text style={styles.text}>
            <Text style={styles.textTittle}>
                {title + ': '}
            </Text>
            {descripcion}
        </Text>
    )
}

export default Informacion

const styles = StyleSheet.create({
    text: {
        textAlign: 'justify',
        color: 'white',
    },
    textTittle: {
        color: '#68FF65',
    }
})