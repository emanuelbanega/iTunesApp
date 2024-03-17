import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Informacion from './Informacion';

const InformacionAgrupada = ({ music }) => {
    const fechaOriginal = new Date(music.releaseDate);

    const opcionesFecha = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const fechaFormateada = fechaOriginal.toLocaleDateString(undefined, opcionesFecha);

    return (
        <View>
            <Informacion title='Artista' descripcion={music.artistName} />
            <Informacion title='Fecha de Lanzamiento' descripcion={fechaFormateada} />
            <Informacion title='Precio' descripcion={music.trackPrice + ' ' + music.currency} />
            <Informacion title='Genero' descripcion={music.primaryGenreName} />
        </View>
    )
}

export default InformacionAgrupada

const styles = StyleSheet.create({})