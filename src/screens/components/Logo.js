import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../asset/front.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 180,
    marginBottom: 15,
  },
})
