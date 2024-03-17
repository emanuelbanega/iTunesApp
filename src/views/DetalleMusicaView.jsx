import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Spacer from '../components/Spacer';
import InformacionAgrupada from '../components/InformacionAgrupada';
import Poster from '../components/Poster';
import Copyrigth from '../components/Copyrigth';
import { exist } from '../db/dbClient';
import Favorito from '../components/Favorito';
import Compartir from '../components/Compartir';
import { useStore } from '../store/FavouritesStore';
import Sugeridos from '../components/Sugeridos';

const DetalleMusicaView = ({ route, navigation }) => {
  const { music } = route.params

  const [isFavourite, setIsFavourite] = useState(false)

  const { add, deleteFav } = useStore()

  useEffect(() => {
    async function validate() {
      const response = await exist(music.trackId)
      setIsFavourite(response)
    }
    validate()

    navigation.setOptions({
      title: music.trackName,
    });

  }, [])

  async function addFavourite(music) {
    await add(music)
    setIsFavourite(true)
  }

  async function removeFavourite(music) {
    await deleteFav(music.trackId)
    setIsFavourite(false)
  }

  function returnIconFavourite() {
    if (isFavourite) {
      return <Favorito color={'red'} action={() => { removeFavourite(music) }} />
    } else {
      return <Favorito color={'white'} action={() => { addFavourite(music) }} />
    }
  }

  function verDetalle(music) {
    navigation.push('Detalle', { music })
  }

  return (
    <View style={styles.container}>
      <Poster music={music} />
      <View style={styles.buttons}>
        {
          returnIconFavourite()
        }
        <Compartir color={'grey'} url={music.trackViewUrl} />
      </View>
      <InformacionAgrupada music={music} />
      <Spacer />
      <Sugeridos artista={music.artistName} action={verDetalle} />
      <Spacer />
      <Copyrigth />
    </View>
  )
}

export default DetalleMusicaView

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  buttons: {
    height: 30,
    width: 200,
    backgroundColor: 'black',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
})