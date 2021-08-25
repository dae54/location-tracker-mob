import React, { useRef, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import Markdown from 'react-native-markdown-display';

export default function EditPreview({ value, setValue }) {
    const pageViewRef = useRef()
    const [selectedPage, setSelectedPage] = useState(0)

    return (
        <View>

            <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => {
                    setSelectedPage(1)
                    pageViewRef.current.setPage(0)
                }}>
                    <View style={[styles.title, selectedPage === 0 ? styles.active : styles.inactive]}>
                        <Text>Edit</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => {
                    setSelectedPage(1)
                    pageViewRef.current.setPage(1)
                }}>
                    <View style={[styles.title, selectedPage === 1 ? styles.active : styles.inactive]}>
                        <Text>Preview</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <PagerView
                ref={pageViewRef}
                style={styles.pagerView}
                initialPage={0}
                onPageSelected={(e) => {
                    setSelectedPage(e.nativeEvent.position)
                }} >
                <View key="1">
                    <TextInput style={styles.input} placeholderTextColor='gray' placeholder='' multiline value={value} onChangeText={(text) => setValue(text)} />
                </View>
                <View key="2">
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={{ height: '100%' }}
                    >
                        <Markdown>
                            {value}
                        </Markdown>
                    </ScrollView>
                </View>
            </PagerView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 0
    },
    title: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        elevation: 1
    },
    input: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        color: 'black',
        height: 150,
        // minHeight: 150,
        // maxHeight: 150,
        textAlign: 'justify',
        textAlignVertical: 'top'
    },
    pagerView: {
        height: 150,
    },
    active: {
        backgroundColor: 'whitesmoke',
    }, inactive: {
        backgroundColor: 'white',
    }
})
