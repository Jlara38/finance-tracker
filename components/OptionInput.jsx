/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import React, {useState, useEffect, useRef, useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native'

/* This will be the section that focuses on importing stuff that are images,videos, icons, etc. (Stuff that isnt components). */
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TxtInput({label, data, isOpen, onToggle}) {
  return (
    <View style={[styles.container, isOpen && {zIndex: 999}]}>
      <TouchableOpacity style={styles.dropdown} activeOpacity={0.8} onPress={onToggle}>
        <Text style={styles.label}>{label}</Text>
        <AntDesign name={isOpen ? "caret-up" : "caret-down"} />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.options}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.value}
              activeOpacity={0.8}
              style={styles.optionItem}
              onPress={onToggle}
            >
              <Text>{item.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignSelf: 'center',
    },
    text: {
        fontSize: 15,
        opacity: 0.8,
    },
    separator: {
        height: 4,
    },
    optionItem: {
        height: 40,
        justifyContent: 'center',
    },
    options:{
        position: 'absolute',
        top: 62,
        backgroundColor: '#979090',
        width: '90%',
        padding: 10,
        borderRadius: 10,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        width: '90%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        elevation: 5,                // Android shadow
        shadowColor: '#000',          // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
})