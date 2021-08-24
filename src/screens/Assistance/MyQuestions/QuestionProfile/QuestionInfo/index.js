import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function QuestionInfo({ question }) {
    return (
        <View style={{ paddingHorizontal: 5 }}>
            <View style={styles.card}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>
                    lorem ipsum dolor asdf fasdf lorem ipsum dolor asdf fasdf ipsum dolor asdf fasdf ipsum dolor asdf fasdf fasdf
                </Text>
                <Text style={{ marginVertical: 10 }}>
                    <Text style={{ color: 'gray' }}>Asked: </Text>3 years, 9 months ago
                    <Text style={{ color: 'gray' }}>  Active: </Text>12 days ago
                    <Text style={{ color: 'gray' }}>  Viewed: </Text>5k times
                </Text>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%' }}></View>
                <Text style={{ marginTop: 10, fontStyle: 'italic' }}>
                    lorem ipsum dolor asdf fasdf lorem ipsum dolor asdf fasdf ipsum dolor asdf fasdf ipsum dolor asdf fasdf fasdf
                    lorem ipsum dolor asdf fasdf lorem ipsum dolor asdf fasdf ipsum dolor asdf fasdf ipsum dolor asdf fasdf fasdf
                    lorem ipsum dolor asdf fasdf lorem ipsum dolor asdf fasdf ipsum dolor asdf fasdf ipsum dolor asdf fasdf fasdf
                </Text>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Tags:</Text>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <Text style={{ backgroundColor: '#e1ecf4', color: '#6389c5', marginHorizontal: 5, padding: 5, borderRadius: 7 }}>JAVASCRIPT</Text>
                    <Text style={{ backgroundColor: '#e1ecf4', color: '#6389c5', marginHorizontal: 5, padding: 5, borderRadius: 7 }}>JAVASCRIPT</Text>
                </View>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Attachments:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Bounty:</Text>
                <View>
                    <Text style={{}}>No bounty set</Text>
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Solution:</Text>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        // elevation: 2,
        // padding: 5,
        // backgroundColor: 'white',
        margin: 5
    }
})