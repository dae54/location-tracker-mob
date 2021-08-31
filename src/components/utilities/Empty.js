import React from 'react'
import { Text, View, Image } from 'react-native'

export default function Empty({ message, size = 300, fontSize = 14 }) {
    return (
        <View style={{ alignItems: 'center', }}>
            <Image
                style={{ width: size, height: size }}
                resizeMode='center'
                // blurRadius={30}
                source={require('../../assets/icons/Questions.png')}
            />
            <Text style={{ fontSize }}>{message}</Text>
        </View>
    )
}
