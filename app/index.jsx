import  {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image, Alert, Platform, ScrollView, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import * as SQLite from 'expo-sqlite';

import SummaryCard from '../components/SummaryCard'
import RecentExpenseCard from '../components/RecentExpenseCard'
import Titles from '../components/Titles'
import AntDesign from '@expo/vector-icons/AntDesign';

import Logo from '../assets/img/funny.png'
import React from 'react'
import { verticalScale } from 'react-native-size-matters';

// This will open our database that will enable us to store data.
const db = SQLite.openDatabaseSync('expenses.db');

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.execSync(
      `CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        amount INTEGER NOT NULL,
        description TEXT,
        category TEXT,
        date TEXT
      );`
    )

    // Only insert if table is empty
    const result = db.getFirstSync('SELECT COUNT(*) as count FROM expenses')
    if (result.count === 0) {
      db.execSync(
        `INSERT INTO expenses (type, amount, description, category, date) VALUES
          ('income', 3000, 'Monthly salary', 'Salary', '2024-01-01'),
          ('expense', 50, 'Grocery run', 'Food', '2024-01-02'),
          ('expense', 120, 'Electric bill', 'Utilities', '2024-01-03'),
          ('income', 500, 'Freelance project', 'Side income', '2024-01-04'),
          ('expense', 200, 'New shoes', 'Shopping', '2024-01-05');`
      )
    }

    // Add this to confirm data is there
    const expenses = db.getAllSync('SELECT * FROM expenses')
    console.log(expenses)

    setIsLoading(false)
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SummaryCard/>
        
        <Titles title={'Recent Transactions'}></Titles>

        <ScrollView style={styles.scrollViewStyle}>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
          <RecentExpenseCard></RecentExpenseCard>
        </ScrollView>

        <TouchableOpacity style={styles.floatingButton}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 6
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
  },

  scrollViewStyle: {
    flex: 1,
    alignSelf: 'center',
    width: '80%', 
    marginTop: 10,
    gap: 25,
    overflow: 'scroll',
  },

  floatingButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: verticalScale(30),
    right: verticalScale(30),
    backgroundColor: '#007AFF',
    justifyContent: 'center',    
    alignItems: 'center',
    elevation: 5,                 // Android shadow
    shadowColor: '#000',          // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
})