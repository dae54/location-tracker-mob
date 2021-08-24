import React, { useState } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native'
import ChatTile from './ChatTile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../../../components/utilities/Colors'

export default function QuestionChat() {
    const [message, setMessage] = useState('')

    const [thread, setThread] = useState({
        loading: false,
        data: [
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef025' },
            { fromId: '611a6638340924536d6ef02' },
        ]
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }} >
                <FlatList
                    data={thread.data}
                    renderItem={({ item: chat }) => <ChatTile chat={chat} />}
                    keyExtractor={(item) => item._id}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#C0C0C0', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={styles.searchProduct}>
                        <TextInput multiline returnKeyType='send' style={styles.subSectionInput} placeholderTextColor='#C0C0C0' placeholder='Type a message' valu={message} onChangeText={(text) => setMessage(text)} />
                        {message.length === 0 &&
                            <Ionicons name='attach' style={styles.searchIcon} color='#C0C0C0' size={20} />
                        }
                    </View>
                    <TouchableNativeFeedback>
                        <View style={{ justifyContent: 'center', marginRight: 10, backgroundColor: 'white', height: 40, width: 40, borderRadius: 20, alignItems: 'center', elevation: 1 }}>
                            <Ionicons name='send' color='#C0C0C0' size={15} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchProduct: {
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        // contents
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    searchIcon: {
        alignSelf: 'center',
        paddingLeft: 10,
    },
    subSectionInput: {
        padding: 5,
        color: colors.primaryDark,
        // width: '100%',
        flex: 1,
        borderRadius: 20
    },
})
