import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },
    withOpacity: {
        opacity: 0.25,
    },
    north: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444',
        // borderBottomWidth: 1,
    },
    south: {
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 40,
        fontFamily: 'Papyrus',
        color: '#fff',
        paddingTop: 40,
    },
    infoIcon: {
        paddingRight: 100,
    },
    infoLine: {
        fontSize: 20,
        fontFamily: 'Papyrus',
        color: '#333',
    },
    infoGuess: {
        fontSize: 30,
        fontFamily: 'Papyrus',
        fontWeight: 'bold',
    },
    gameIcon: {
        paddingRight: 15,
    },
    optionsDisplay: {
        fontSize: 25,
        fontFamily: 'Papyrus',
    },
    optionsTitle: {
        fontSize: 35,
        fontFamily: 'Papyrus',
    },
    row: {
        flexDirection: 'row',
    },
    spaced: {
      marginTop: 20,
      marginBottom: 20,
    },

    cell: {
        padding: 10,
        alignItems: 'center'
    },
    cellBorder: {
        padding: 10,
        margin: 10,
        alignItems: 'center',
        border: 'solid 1px #555',
        borderRadius: 10,
    },

    levelSelected: {
        fontSize: 25,
        fontFamily: 'Papyrus',
        // fontWeight: 'bold',
    },
    levelUnselected: {
        color: '#bbb',
        fontSize: 25,
        fontFamily: 'Papyrus',
    },

    button: {
        backgroundColor: '#92f7a8',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonText: {
        fontFamily: 'Papyrus',
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    modalView: {
        minWidth: 400,
        margin: 20,
        backgroundColor: '#fff',
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
});