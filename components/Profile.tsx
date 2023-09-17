import React from "react";
import {Text, View} from "react-native";

const Profile = ({user}) => {
return (
        <View>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.city}</Text>
            <Text>{user.state}</Text>
            <Text>{user.status}</Text>
        </View>
    )
}

export default Profile;
