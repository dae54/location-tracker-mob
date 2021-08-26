import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function FAB({ icon, color, callback }) {
    return (
        <TouchableNativeFeedback activeOpacity={0.8}
            onPress={() => callback()}
            style={[styles.touchableOpacityStyle, { backgroundColor: color }]}>
            <AntDesign name={icon} size={30} color={color} />
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        borderRadius: 40,
    },
})
