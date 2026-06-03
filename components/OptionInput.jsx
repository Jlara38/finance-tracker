/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import React, {useState, useEffect, useRef, useCallback} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native'

/* This will be the section that focuses on importing stuff that are images,videos, icons, etc. (Stuff that isnt components). */
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TxtInput({label, data, isOpen, onToggle, selected, onSelect}) {
  return (
    // This is the container that will bind the drop down menu in a rectanglular area.
    <View style={[styles.container, isOpen && {zIndex: 999}]}> 
      {/* This touchable opacity allows the user to interact with the dropdown menu.  */}
      <TouchableOpacity style={styles.dropdown} activeOpacity={0.8} onPress={onToggle}>
        <Text style={styles.label}>{selected ?? label}</Text>
        <AntDesign name={isOpen ? "caret-up" : "caret-down"} />
      </TouchableOpacity>

      {/* This section of the code is in-charge of the behaivior for that the button will take once you click on the 
          drop down menu button. */}
      {isOpen && (
        <View style={styles.options}>
          {/* This particular part of the code will take the data set that was given and map it out dynamically. 
              It will also use the selected and onSelect props in order to close and save the selected item that was used.*/}
          {data.map((item) => (
            <TouchableOpacity
              key={item.value}
              activeOpacity={0.8}
              style={styles.optionItem}
              onPress={() => onSelect(item.value)}
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
        marginTop: 30,
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
        top: 63,
        backgroundColor: '#fff',
        width: '90%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        zIndex: 999,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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