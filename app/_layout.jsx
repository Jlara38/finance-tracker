import {StyleSheet, Text, View, Image} from 'react-native'
import {Drawer} from 'expo-router/drawer'

export default function Layout(){
    return(
        <Drawer
            screenOptions={{
                headerStyle: {backgroundColor: '#ffffff'}, // Influences the header color in general no text etc just the background
                headerTintColor: "#8b5cf6", // Will Directily influence the header text color and hamburger color
                drawerStyle: {backgroundColor: "#ffffff"}, // Will influence the background color of the whole drawer
                drawerActiveTintColor: "#8b5cf6", // Influences the color of the current tab the app is in. 
                drawerInactiveBackgroundColor: "#64748b"
            }}>
            <Drawer.Screen
                name = "index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home'
                }}
            />

            <Drawer.Screen
                name="search"
                options={{
                    drawerLabel: 'Search',
                    title: 'Search'
                }}
            />

            <Drawer.Screen
                name="insights"
                options={{
                    drawerLabel: 'Insights',
                    title: 'Insights'
                }}
            />
        </Drawer>
    )
}

const styles = StyleSheet.create({

})