import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = () => {
  return (
    <View style={styles.container}></View>
  )
}

export default Spacer

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})