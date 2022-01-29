import React from 'react';
import { StyleSheet } from 'react-native';

export const STYLES = StyleSheet.create({
    container: {
        height: '100%',
        // maxWidth: 1500,
        backgroundColor: '#fff',
    },
    // over: {
    //     // position: 'relative',
    //     // top: 360,
    // },
    // under: {
    //     // opacity: 0.7,
    // },
    // outline: {
    //     // border: 'solid #777 1px',
    //     borderRadius: 10,
    //     padding: 10,
    //     margin: 5,
    //     // backgroundColor: '#fff',
    // },

    north: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomWidth: 1,
    },
    center: {
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomWidth: 1,
    },
    south: {
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 50,
        fontFamily: 'Papyrus',
        paddingTop: 40,
    },
    optioonsDisplay: {
        fontSize: 25,
        fontFamily: 'Papyrus',
    },
    optionsTitle: {
        fontSize: 40,
        fontFamily: 'Papyrus',
    },
    optionsGameTitle: {
        fontSize: 25,
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

    levelSelected: {
        fontSize: 25,
        fontFamily: 'Papyrus',
        fontWeight: 'bold',
    },
    levelUnselected: {
        color: '#aaa',
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
        // alignItems: 'center',
        marginTop: 25,
    },
    modalView: {
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