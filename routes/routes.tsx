import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import DatingScreen from "../screens/DatingScreen";
import FamilyScreen from "../screens/FamilyScreen";
import GroupScreen from "../screens/GroupScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

import {StyleSheet} from "react-native";
import PostDetailScreen from "../screens/PostDetailScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={styles.drawerBackground}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export const AppStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName="LoginScreen"
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
            <Drawer.Screen name="Log In" component={LoginScreen}/>
            <Drawer.Screen name="Sign Up" component={SignupScreen}/>
        </Drawer.Navigator>
    );
};

export const AuthStack = () => {
    return (
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
            <Drawer.Screen name="PostDetail" component={PostDetailScreen} options={() => {
                return {
                    drawerItemStyle: {display: 'none'},
                    width: '100%',
                    headerTitle: '',
                }
            }}/>
        </Drawer.Navigator>
    );
};

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
    horizontalRule: {
        borderBottomColor: '#FFD700',
    }
});
