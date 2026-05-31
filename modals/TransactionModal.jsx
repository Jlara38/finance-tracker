/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import React, {useState, useEffect} from 'react'
import {Modal, Text, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, TextInput} from 'react-native'

/* This will be the section that focuses on importing stuff from the already made components */
import OptBtn from '../components/OptionInput'

/* This will be the section that focuses on importing stuff that are images,videos, icons, etc. (Stuff that isnt components). */
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TransactionModal  ({modalVisible, setModalVisible}){
  const [openDropdown, setOpenDropdown] = useState(null); // Stores the name of the open dropdown
  const types = [{value: 'Credit'}, {value: 'Debit'}, {value: 'Cash'}];

  return(
    <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
            {/* The small greyed out area that allows the person to close the modal without pressing the close or back button. */}
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)} style={styles.closeArea}>
                <View style={styles.closeArea}></View>
            </TouchableWithoutFeedback>

            {/* The actual container being used to display the modal content.  */}
            <View style={styles.modalBox}>
                    
                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>

                <OptBtn 
                    label='Type' 
                    data={types} 
                    isOpen={openDropdown === 'type'}
                    onToggle={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}    
                />
            </View>
        </View>
    </Modal>
  ) 
}

const styles = StyleSheet.create({
    // specifies how much space the modal container will use up in regards to the screen and how it will be positioned. 
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    // specifies the area the grey area to that can be used to close the modal will use.
    closeArea: {
        flex: 1,
        width: '100%',
    },
    
    // Defines the actual size of the modal box that the user will be able to interact with. 
    // Effectively sharing part of the space that the modal container has with the close area. 
    modalBox: {
        width: '100%',
        height: '85%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        gap: 10,
    },

    // Specifically made so that the button sticks to the end of the modal box so that the user 
    // can close the modal with the button as well. 
    closeButton: {
        alignSelf: 'flex-end',
    },
})