/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function RecentExpenseCard({type, desc, price, date}){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.vertContainerL}>
                <Text style={styles.maintext}>{type}</Text>
                <Text style={styles.subtext}>{desc}</Text>
            </View>
            <View style={styles.vertContainerR}>
                <Text style={styles.maintext}>{price}</Text>
                <Text style={styles.subtext}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        padding: 12,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    vertContainerL: {
        justifyContent: 'flex-start',
    },
    vertContainerR: {
        justifyContent: 'flex-end',
    },
    maintext: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtext: {
        fontSize: 10,
    },
})