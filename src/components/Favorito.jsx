import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Favorito = ({ color, action }) => {
    return (
        <Pressable onPress={() => { action() }}>
            <Svg version="1.1" width="30" height="30" viewBox="0 0 32 32">
                <Path fill={color} d="M23,3c-3.014,0-5.636,1.668-7,4.13C14.636,4.668,12.014,3,9,3c-4.418,0-8,3.582-8,8
	c0,11,12.857,18,15,18s15-7,15-18C31,6.582,27.418,3,23,3z M9,7c-2.206,0-4,1.794-4,4c0,0.552-0.448,1-1,1s-1-0.448-1-1
	c0-3.309,2.691-6,6-6c0.552,0,1,0.448,1,1S9.552,7,9,7z"/>
            </Svg>
        </Pressable>
    )
}

export default Favorito

const styles = StyleSheet.create({})