import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Markdown from 'react-native-markdown-display';
import moment from 'moment'

const screenWidth = Dimensions.get('window').width

export default function QuestionInfo({ question }) {

    return (
        <ScrollView style={{ paddingHorizontal: 5 }}>
            <View style={styles.card}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>
                    {question.title}
                </Text>
                <Text style={{ marginVertical: 10 }}>
                    <Text style={{ color: 'gray' }}>Asked: </Text>{moment(question.createdAt).fromNow()}
                    {/* <Text style={{ color: 'gray' }}>  Active: </Text>12 days ago */}
                    {/* <Text style={{ color: 'gray' }}>  Viewed: </Text>5k times */}
                </Text>
                <ScrollView style={{ elevation: 2, backgroundColor: 'white', maxHeight: screenWidth }}>
                    <ScrollView style={[styles.scrollView, { width: screenWidth * 0.96 }]} horizontal>
                        <Markdown>
                            {question.body}
                        </Markdown>
                    </ScrollView>
                </ScrollView>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Tags:</Text>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    {question.tags.map((tag, index) => <Text key={tag} style={{ backgroundColor: '#e1ecf4', color: '#6389c5', marginHorizontal: 5, padding: 5, borderRadius: 7 }}>{tag}</Text>)}
                </View>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold' }}>Attachments:</Text>
                <Text>Coming soon</Text>
                {/* <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                    <View style={{ width: 50, backgroundColor: 'red', marginHorizontal: 5, height: 50 }}></View>
                </View> */}
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Bounty:</Text>
                <View>
                    <Text style={{}}>Coming soon</Text>
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Quick Solution:</Text>
                <Text style={{}}>Coming soon</Text>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    card: {
        // elevation: 2,
        // padding: 5,
        // backgroundColor: 'white',
        margin: 5
    },
    scrollView: {
        flexGrow: 1,
        // margin: 5,
        paddingVertical: 20,
        paddingLeft: 5,
        paddingRight: 10,
        // width: '100%'
        // backgroundColor: 'gray',
        // marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
})