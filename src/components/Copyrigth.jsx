import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Copyrigth = () => {
    return (
        <View>
            <Text style={styles.copyrigth}>© Derechos Reservados iTunesApp 2024</Text>
        </View>
    )
}

export default Copyrigth

const styles = StyleSheet.create({
    copyrigth: {
        marginTop:10,
        color: 'grey',
        marginBottom: 20,
        fontSize: 14,
    },
})