import React, {useState, useEffect, useRef} from 'react'
import {StyleSheet, View, Text, TextInput, Animated, TouchableWithoutFeedback, Keyboard} from 'react-native'

export default function TxtInput() {
  const [text, setText] = useState('')
  const floatingLabelAnimation = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    // Animate the label up and reduce its size when input is focused
    Animated.timing(floatingLabelAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    // If the input is empty animate the floating label back tp its original position. 
    if(!text){
        Animated.timing(floatingLabelAnimation, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false,
        }).start();
    }
  };

  //Defining the Animated styles for the label
  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [10, -5], // top value
    }),
    fontSize: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12], // font size
    }),
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Animated.Text style={[styles.label, floatingLabelStyle]}>Type</Animated.Text>
            <TextInput 
                style={styles.input} 
                value={text} 
                onChangeText={val => setText(val)}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        paddingLeft: 10,
        position: 'absolute',
    },
})