import React, {useEffect} from 'react'
import {Alert, Text, View, Modal, Pressable} from 'react-native'
import {modal} from "../styles/common";


const Message = ({message, displayMessage, setDisplayMessage}) => {
    useEffect(() => {
        setTimeout(() => {
            setDisplayMessage(false);
        }, 1500);
    }, []);
    return (
        <>
            <Modal
                animationType="fade"
                statusBarTranslucent
                transparent={true}
                visible={displayMessage}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setDisplayMessage(!displayMessage);
                }}>
                <View style={modal.centeredView}>
                    <View style={modal.modalView}>
                        <Text style={modal.modalText}>{message}</Text>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Message;
