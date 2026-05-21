/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import React from 'react'
import {Modal, Text, View, useState, useEffect, TouchableOpacity, StyleSheet} from 'react-native'

export default function TransactionModal  ({modalVisible, setModalVisible}){
  return(
    <Modal
        visible={modalVisible}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text> Add Expense </Text>
            {/* Close Button */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text> Cancel </Text>
            </TouchableOpacity>
            </View>
        </View>
    </Modal>
  ) 
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
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