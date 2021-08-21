import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FeedbackHandler({ message }) {
    return (
        <View style={message.status === 'error' ? styles.error : styles.success}>
            <Text style={{ color: 'white', textAlign: 'center' }}>{message.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        backgroundColor: '#ffaa00',
        padding: 5,
        marginVertical: 5,
    },
    success: {
        backgroundColor: '#0abf00',
        padding: 5,
        marginVertical: 5,
    }
})
