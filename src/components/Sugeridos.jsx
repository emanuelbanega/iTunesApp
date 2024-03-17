import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { buscarMusicaArtista } from '../http/MusicController'

const Sugeridos = ({ artista, action }) => {
    const [sugeridos, setSugeridos] = useState([])

    useEffect(() => {
        async function buscar(artista) {
            const { results } = await buscarMusicaArtista(artista, 5)
            setSugeridos(results)
        }
        buscar(artista)
    }, [])

    function renderItem(music) {
        return <Pressable onPress={() => { action(music) }}>
            <View style={styles.item}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: music.artworkUrl100 }}></Image>
                <Text style={styles.itemText}>{music.trackName}</Text>
            </View>
        </Pressable>
    }

    return (
        <View style={styles.container}>
            <FlatList horizontal style={styles.flatList} data={sugeridos} renderItem={(elem) => { return renderItem(elem.item) }} />
        </View>
    )
}

export default Sugeridos

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    item: {
        marginHorizontal:5,
    },
    itemText: {
        width: 80,
        fontSize:10,
        color:'white'
    },
    white: {
        color: 'white',
    },
    flatList: {
        flex:1,
    }
})