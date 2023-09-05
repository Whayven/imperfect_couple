import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DatingScreen from './screens/DatingScreen';
import FamilyScreen from './screens/FamilyScreen';
import GroupScreen from './screens/GroupScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={styles.drawerBackground}>
            <DrawerItemList {...props} labelStyle={styles.drawerText} activeBackgroundColor={styles.drawerText} />
        </DrawerContentScrollView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeScreen"
                drawerContent={props => <CustomDrawerContent {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#333333',
                    },
                    headerTintColor: '#FFD700',
                    drawerLabelStyle: {
                        color: '#FFD700',
                    },
                    drawerActiveTintColor: '#FFD700',
                }}
            >
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="About" component={AboutScreen}/>
                <Drawer.Screen name="Dating" component={DatingScreen}/>
                <Drawer.Screen name="Family" component={FamilyScreen}/>
                <Drawer.Screen name="Group" component={GroupScreen}/>
                <Drawer.Screen name="Messages" component={MessagesScreen}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerBackground: {
        backgroundColor: '#333333',
    },
    drawerText: {
        color: '#FFD700',
    },
});
