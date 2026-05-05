import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function RecentExpenseCard(){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.vertContainerL}>
                <Text>Type</Text>
                <Text>Description</Text>
            </View>
            <View style={styles.vertContainer}>
                <Text>Price</Text>
                <Text>Date</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        width: '95%',
        alignSelf: 'center',

        padding: 12,

        marginBottom: 10,
    
        borderRadius: 10,
        backgroundColor: '#BBBB',
    },
    vertContainerL: {
        justifyContent: 'flex-start',
    },
    vertContainerR: {
        justifyContent: 'flex-end',
    }
})