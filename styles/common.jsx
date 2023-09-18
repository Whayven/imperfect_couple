import {StyleSheet} from 'react-native';

export const basic = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
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
        fontSize: 16,
        textAlign: 'center',
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
