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
        width: '100%',
        backgroundColor: '#1a1a1a', // Grey background
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10
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
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    postButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 20,
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
        width: 80,

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
        height: 75,
        backgroundColor: '#1a1a1a',
        color: '#FFD700',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        paddingTop: 10,
        width: '80%',
        borderRadius: 10,
        marginHorizontal: 25,
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
        width: '80%',
        backgroundColor: '#1a1a1a',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
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
