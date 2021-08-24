import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'


export default function QuestionListTile({ question, navigation }) {
    return (
        <TouchableOpacity style={styles.card}
            activeOpacity={0.9}
            onLongPress={() => {
                console.log('long press')
            }}
            onPress={() => {
                navigation.navigate('question_profile', { question })
            }} >
            {/* <View > */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text numberOfLines={2} style={{ width: '90%', fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>
                    lorem ipsum dolor myqqest lorem ipsum lorem ipsum dolor myqqest lorem ipsum dolor myqqest dolor myqqest
                </Text>
                <Text style={{ backgroundColor: 'green', width: 15, height: 15, borderRadius: 7.5 }} />
            </View>
            <View style={{ marginTop: 5 }}>
                <Text numberOfLines={1} style={{ color: '#C0C0C0' }}>
                    lorem ipsum dolor myqqest lorem ipsum lorem ipsum dolor myqqest lorem ipsum dolor myqqest dolor myqqest
                    lorem ipsum dolor myqqest lorem ipsum lorem ipsum dolor myqqest lorem ipsum dolor myqqest dolor myqqest
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{}}>Assistance: Dr. Maziku</Text>
                <Text style={{}}>12/10/2020 1230hrs</Text>
            </View>
            {/* </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        // height: 150,
        backgroundColor: 'white',
        // margin: '3%',
        marginVertical: 10,
        marginHorizontal: 1,
        elevation: 3,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
})
