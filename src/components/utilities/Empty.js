import React from 'react'
import { Text, View, Image } from 'react-native'

export default function Empty({ message, size = 50, fontSize = 14 }) {
    return (
        <View style={{ alignItems: 'center', margin: 10 }}>
            <Image
                style={{ width: size, height: size }}
                source={require('../../assets/icons/Empty.png')}
            />
            <Text style={{ fontSize }}>{message}</Text>
        </View>
    )
}
