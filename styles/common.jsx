import {StyleSheet} from 'react-native';

export const basic = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // Grey background
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700', // Gold color
        paddingBottom: 10,
    },
    basicText: {
        fontSize: 20,
        color: '#FFD700', // Gold color
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    textInput: {
        height: 50,
        color: '#FFD700',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        width: '80%',
        borderRadius: 10,
        marginHorizontal: 25
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonIcon: {
        marginRight: 10,
    },
    horizontalRule: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '99%',
        marginBottom: 10,
    },
    loadingContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // Grey background
    }
});

export const profile = StyleSheet.create({
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a', // Grey background
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    profileInfo: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // Grey background
    }
});

export const post = StyleSheet.create({
    postContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#1a1a1a', // Grey background
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        padding: 10
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#1a1a1a', // Grey background
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        padding: 10
    },
    scrollContainer: {
        alignSelf: 'stretch',
        height: '100%',
        backgroundColor: '#1a1a1a', // Grey background
        paddingHorizontal: 10,
    },
    postText: {
        fontSize: 20,
        color: '#FFD700', // Gold color
        paddingHorizontal: 10,
    },
    postImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        paddingHorizontal: 10,
        borderRadius: 50
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    postHeaderContent: {
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 50,
        width: '80%',
        marginLeft: 10,
    },
    postHeaderUsername: {
        fontSize: 16,
        color: 'grey',
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    postHeaderDate: {
        fontSize: 12,
        color: 'grey',
    },
    postButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    commentButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    postButtonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    postContent: {
        fontSize: 16,
        color: '#FFD700', // Gold color
        paddingBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    postDate: {
        fontSize: 12,
        color: 'grey',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 150,
        paddingVertical: 10,

    },
    icon: {
        width: 26,
        height: 26,
    },

});

export const form = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#1a1a1a' // Grey background
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffcc00', // Gold color
        width: '70%',
        paddingLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        paddingTop: 20,
        marginHorizontal: 25
    },
    scrollContainer: {
        alignSelf: 'stretch',
    },
    bigTextInput: {
        height: 50,
        backgroundColor: '#1a1a1a',
        color: '#FFD700',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '70%',
        borderRadius: 10,
        marginRight: 10,
        textAlignVertical: 'top'
    },
    postContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // Grey background
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // Grey background
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    commentText: {
        backgroundColor: '#1a1a1a',
        color: '#FFD700',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '70%',
        borderRadius: 10,
        textAlignVertical: 'top'
    }
});

export const modal = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        opacity: 0.9,
        margin: 20,
        backgroundColor: '#1a1a1a',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 0,
        paddingHorizontal: 20,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'gold',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'gold',
    },
});

export const sidebar = StyleSheet.create({
    sidebarContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: 'black',
    },
    sidebarButton: {
        paddingVertical: 10,
    },
    sidebarButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD700',
    },
});
