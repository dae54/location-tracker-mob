import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAuth } from '../../../../../context/AuthContext'

export default function ChatTile({ chat }) {
    const { authData } = useAuth()
    const toAlignRight = chat.fromId === authData._id ? true : false

    return (
        <View>
            <View style={[styles.card, toAlignRight ? styles.alignRight : styles.alignLeft]}>
                <Text>lorem ipsum dolor meskques fedora lorem ipsum dolor lorem ipsum dolor meskques fedora meskques fedora</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        elevation: 2,
        marginHorizontal: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    alignRight: {
        alignSelf: 'flex-end',
        backgroundColor: 'white',
    },
    alignLeft: {
        alignSelf: 'flex-start',
        backgroundColor: 'red',
    }
})
