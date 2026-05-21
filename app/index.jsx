
/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import React from 'react'
import {useState, useEffect} from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal} from 'react-native'
import { verticalScale } from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context'

/* This will be the section that focuses on importing stuff from the already made components */
import SummaryCard from '../components/SummaryCard'
import RecentExpenseCard from '../components/RecentExpenseCard'
import Titles from '../components/Titles'
import TransactionModal from '../modals/TransactionModal'

/* This will be the section that focuses on importing stuff that are images,videos, icons, etc. (Stuff that isnt components). */
import AntDesign from '@expo/vector-icons/AntDesign';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)
  const addExpense = () => {
    // Add modal to be able to take input for the next expense that needs to be added.
    console.log('Button clicked!');
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <TransactionModal modalVisible={modalVisible} setModalVisible={setModalVisible}></TransactionModal>


        <SummaryCard/>
        
        <Titles title={'Recent Transactions'}></Titles>

        <ScrollView style={styles.scrollViewStyle}>
          {/* TODO: Create the list dynamicaly for the Recent expense cards.
          TODO: Make sure you can pass props into them that way the infomation can be filled in with the database info. */}
          <RecentExpenseCard type={'Utilities'} price={'200'} desc={'Paid gas bill'} date={'20 May'}></RecentExpenseCard>
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

        <TouchableOpacity style={styles.floatingButton} onPress={addExpense}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  // The safeArea is just meant to be the separation between the content and the top of the screen.
  safeArea:{
    flex: 1,
  },

  // The container is just where the actual content is going to be in. 
  container: {
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 6
  },
  
  // The content style is simply specifying how the actual meat of the app is gonna be 
  // laid out and what kind of spacing is desired for the look of the app. 
  content:{
    alignItems: 'center',
    paddingBottom: 20,
  },
  // 
  // card: {
  //   backgroundColor: '#eee',
  //   padding: 20,
  //   borderRadius: 5,
  //   boxShadow: '4px 4px rgba(0,0,0,0.1)',
  // },

  // ScrollViewStyle is specifies how much space I want the scroll view take up in concern to the screen. 
  // Specifies behavior and spacing.
  scrollViewStyle: {
    flex: 1,
    alignSelf: 'center',
    width: '80%', 
    marginTop: 10,
    gap: 25,
    overflow: 'scroll',
  },

  // floatingButton style is simple there to specify size, position, and styling related to the button that will be used 
  // for the sake of adding more transactions/deposits. 
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
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
    
  modalContent: {
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },
})