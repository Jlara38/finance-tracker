import {StyleSheet, Text, View, Image, Button, Alert, Platform, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import RecentExpenseCard from '../components/RecentExpenseCard'


import Logo from '../assets/img/funny.png'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}> This is the Home Page</Text>
        <Image style={styles.img} source={Logo}/>

        <Text style={{marginTop: 10, marginBottom: 30}}> Reading List App</Text>

        <RecentExpenseCard></RecentExpenseCard>
        <RecentExpenseCard></RecentExpenseCard>
        <RecentExpenseCard></RecentExpenseCard>
        <RecentExpenseCard></RecentExpenseCard>
        
        <RecentExpenseCard></RecentExpenseCard>
        <RecentExpenseCard></RecentExpenseCard>
        <RecentExpenseCard></RecentExpenseCard>
        <RecentExpenseCard></RecentExpenseCard>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    alignItems: 'center',
    paddingBottom: 20,
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
    height: '200',
    width: '200'
  }
})