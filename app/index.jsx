import {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image, Button, Alert, Platform, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import * as SQLite from 'expo-sqlite';
import React from 'react'

import SummaryCard from '../components/SummaryCard'
import RecentExpenseCard from '../components/RecentExpenseCard'

import Logo from '../assets/img/funny.png'
import React from 'react'

// This will open our database that will enable us to store data.
const db = SQLite.openDatabase('expenses.db');

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS expenses(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          type TEXT,
          amount REAL NOT NULL,
          description TEXT,
          category Text,
          date TEXT,
        );`
      )
    })
  })

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