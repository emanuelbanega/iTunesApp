import react, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Listado from "../components/Listado";
import { buscarMusicaArtista } from "../http/MusicController";
import FAB from "../components/FAB";

const HomeView = ({ navigation }) => {
    const [listado, setListado] = useState([])
    const [word, setWord] = useState("")

    useEffect(() => {
        async function getMusica(artista) {
            const result = await buscarMusicaArtista(artista)
            setListado(result.results)
        }
        if (word != '') {
            getMusica(word)
        }
    }, [word])

    function accederDetalle(music) {
        navigation.navigate('Detalle', { music })
    }

    function accederFavoritos() {
        navigation.navigate('Favourite')    
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={word} onChangeText={setWord} placeholder="Ingrese el artista"/>
            <Listado listado={listado} action={accederDetalle} />
            <FAB action={accederFavoritos}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    input: {
        padding:5,
        backgroundColor:'white',
        borderRadius:10,
        height: 50,
        backgroundColor: '#CFD1D0',
        marginTop:5,
        marginHorizontal:5,
    }
})

export default HomeView