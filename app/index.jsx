import {StyleSheet, Text, View, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import Logo from '../assets/img/funny.png'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}> This is the Home Page</Text>
      <Image style={styles.img} source={Logo}/>

      <Text style={{marginTop: 10, marginBottom: 30}}> Reading List App</Text>

      <View style={styles.card}> 
        <Text> Hello This is a card</Text>
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)',
  },
  img: {
    resizeMode: 'contain',
    marginVertical: '20',
    height: '50%',
    width: '50%'
  }
})