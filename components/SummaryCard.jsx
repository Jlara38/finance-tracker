/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import { StyleSheet, Text, View} from 'react-native'
import { verticalScale } from 'react-native-size-matters'

/* This will be the section that focuses on importing stuff that are images,videos, icons, etc. (Stuff that isnt components). */
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SummaryCard(){
    return(
        <View style={styles.container}>
            {/* This is the beginnind of the card that will display the general information */}
            <View style={styles.totalBalanceRow}>
                <Text>Total Balance</Text>
            </View>
            <Text style={styles.balance}> $2341.23 </Text>

            <View style={styles.stats}>
                {/* Income Column */}
                <View style={{gap: verticalScale(5)}}>
                    <View style={styles.incomeContainer}>
                        <View style={styles.income}> 
                            {/* <AntDesign name="rise" size={24} color="black" /> */}
                            <Text>Income</Text>
                        </View>

                        <View style={{aligalignSelf: 'center'}}>
                            <Text style={{color: 'green', size: 16, fontWeight: 'bold'}}> $500 </Text>
                        </View>
                    </View>
                </View>

                {/* Expense Column */}
                <View style={{gap: verticalScale(5)}}>
                    <View style={styles.incomeContainer}>
                        <View style={styles.income}> 
                            {/* <AntDesign name="fall" size={24} color="black" /> */}
                            <Text>Expense</Text>
                        </View>

                        <View style={{aligalignSelf: 'center'}}>
                            <Text style={{color: 'red', size: 16, fontWeight: 'bold'}}> $200 </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* The general stats card ends right here. Anythign else added has to be after here. */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    stats:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    incomeContainer: {
        flexDirection: "column",
        padding: 5,
    },
    income: {
        flexDirection: 'row',
        gap: 10,
    },
    balance: {
        color: 'black',
        size: 30,
        fontWeight: 'bold',
    },
})