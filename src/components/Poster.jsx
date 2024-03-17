import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const Poster = ({ music }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.imageBackground} source={{ uri: music.artworkUrl100 }} blurRadius={5}></Image>
            <Image style={styles.image} source={{ uri: music.artworkUrl100 }}></Image>
        </View>
    )
}

export default Poster

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
    },
    imageBackground: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid',
    },
})