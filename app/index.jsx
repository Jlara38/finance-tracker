import {StyleSheet, Text, View, Image, Button, Alert, Platform, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import SummaryCard from '../components/SummaryCard'
import RecentExpenseCard from '../components/RecentExpenseCard'


import Logo from '../assets/img/funny.png'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>

      <SummaryCard/>

      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 8
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