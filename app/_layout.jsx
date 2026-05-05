import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import {Drawer} from 'expo-router/drawer'
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';

export default function Layout(){
    return(
        
        <Drawer
            screenOptions={{
                headerStyle: {backgroundColor: '#ffffff'}, // Influences the header color in general no text etc just the background
                headerTintColor: "#8b5cf6", // Will Directily influence the header text color and hamburger color
                drawerStyle: {backgroundColor: "#ffffff"}, // Will influence the background color of the whole drawer
                drawerActiveTintColor: "#8b5cf6", // Influences the color of the current tab the app is in. 
                drawerInactiveBackgroundColor: "#ffffff"
            }}>
            <Drawer.Screen // Used to specify the
                name = "index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({color, size}) => <Ionicons name='home' size={size} color={color}/>
                }}
            />

            <Drawer.Screen
                name="search"
                options={{
                    drawerLabel: 'Search',
                    title: 'Search',
                    drawerIcon: ({color, size}) => <Ionicons name='search' size={size} color={color}/>
                }}
            />

            <Drawer.Screen
                name="insights"
                options={{
                    drawerLabel: 'Insights',
                    title: 'Insights',
                    drawerIcon: ({color, size}) => <Foundation name='graph-pie' size={size} color={color}/>
                }}
            />
        </Drawer>
    )
}

const styles = StyleSheet.create({

})