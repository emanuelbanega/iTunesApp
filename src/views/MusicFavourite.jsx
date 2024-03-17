import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Listado from '../components/Listado'
import { useStore } from '../store/FavouritesStore'

const MusicFavourite = ({ navigation }) => {
    const { favourites, getAll } = useStore()

    useEffect(() => {
        async function getFavourites() {
            await getAll()
        }
        getFavourites()
    }, [])

    function accederDetalle(music) {
        navigation.navigate('Detalle', { music })
    }

    function isEmpty() {
        if (favourites.length == 0) {
            return true
        } else {
            return false
        }
    }
    return (
        <View style={styles.container}>
            {
                isEmpty() ? (
                    <View style={styles.textView}>
                        <Text style={styles.text}>No tienes canciones en Favoritos!</Text>
                    </View>
                ) : (<Listado listado={favourites} action={accederDetalle} />)
            }
        </View>
    )
}

export default MusicFavourite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize:20,
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    }
})