import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Listado = ({ listado, action }) => {

    const navigation = useNavigation();

    function renderItem(music) {
        return (<Pressable
            onPress={() => { action(music) }}
            style={styles.item}
        >
            <Image style={styles.image} source={{ uri: music.artworkUrl100 }}></Image>
            <View style={styles.text}>
                <Text style={styles.textTittle}><Text  style={styles.textTittleColor}>Canción: </Text >{music.trackName}</Text>
                <Text style={styles.textTittle}><Text  style={styles.textTittleColor}>Artista: </Text> {music.artistName}</Text>
            </View>
        </Pressable>);
    }

    return (<FlatList style={{flex:1}} data={listado} renderItem={(elem) => { return renderItem(elem.item) }} />)
}

export default Listado

const styles = StyleSheet.create({
    item: {
        height: 100,
        backgroundColor: '#373434',
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        borderWidth:1,
        borderColor:'white',
        borderStyle:'solid'
    },
    image: {
        width: 100,
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    text: {
        marginLeft:5,
        justifyContent: 'center',
    },
    textTittle: {
        color:'white',
        width: 200,
    },
    textTittleColor:{
        color:'green',
        fontWeight:'bold',
    },
})